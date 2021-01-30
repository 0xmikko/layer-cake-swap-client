import {ThunkPoolAction} from "./index";
import {updateStatus} from "dlt-operations";
import {BigNumber} from "ethers";
import {INITIAL_RATIO} from "../../config";
import {ThunkTokenAction} from "../token";
import {toBN} from "../../utils/formatter";
import {getL2Balance} from "../substrate/actions";
import {AssetType} from "../../core/asset";

export const updatePool = (opHash: string = "0"): ThunkPoolAction => async (
  dispatch,
  getState
) => {
  try {
    // Construct
    const subApi = getState().substrate.api;
    if (!subApi) throw new Error("No substrate instance");

    const account = getState().web3.account;
    if (!account) throw new Error("No account set");

    const tokenLiquidityCodec = await subApi.query.polkaSwap.poolTokenLiquidity();
    const ethLiquidityCodec = await subApi.query.polkaSwap.poolETHLiquidity();
    const liquidityBalanceCodec = await subApi.query.polkaSwap.liquidityBalance(account);

    const tokenLiquidity = BigNumber.from(tokenLiquidityCodec.toHex());
    const ethLiquidity = BigNumber.from(ethLiquidityCodec.toHex());
    const balance = BigNumber.from(liquidityBalanceCodec.toHex());

    console.log(tokenLiquidity, ethLiquidity, balance)

    const rate = ethLiquidity.isZero()
      ? INITIAL_RATIO
      : tokenLiquidity.div(ethLiquidity).toNumber();

    dispatch({
      type: "POOL_UPDATE_SUCCESS",
      payload: {
        tokenLiquidity,
        ethLiquidity,
        rate,
        balance,
      },
    });
    dispatch(updateStatus(opHash, "STATUS.SUCCESS"));
  } catch (e) {
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e));
  }
};


export const liquidityAction = (
    action: "add" | "remove",
    amount: number,
    opHash?: string
): ThunkTokenAction => async (dispatch, getState) => {
  try {
    const { vault, signer } = getState().web3;
    if (!vault || !signer) {
      throw new Error("Cant connect vault contract");
    }

    const receipt =
        action === "add"
            ? await vault.connect(signer).addLiquidity(toBN(amount))
            : await vault.connect(signer).removeLiquidity(toBN(amount));

    await receipt.wait();
    dispatch(updateStatus(opHash, "STATUS.SUCCESS"));
    await receipt.wait(2);
    await dispatch(getL2Balance("eth", opHash));
    await dispatch(getL2Balance("token", opHash));
    await dispatch(updatePool(opHash));
  } catch (e) {
    console.log(e);
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e?.message));
  }
};


export const swapAction = (
    target: AssetType,
    amount: number,
    opHash?: string
): ThunkTokenAction => async (dispatch, getState) => {
  try {
    const { vault, signer } = getState().web3;
    if (!vault || !signer) {
      throw new Error("Cant connect vault contract");
    }

    const receipt =
        target === "token"
            ? await vault.connect(signer).swapToToken(toBN(amount))
            : await vault.connect(signer).swapToEth(toBN(amount));

    await receipt.wait();
    dispatch(updateStatus(opHash, "STATUS.SUCCESS"));
    await receipt.wait(2);
    await dispatch(getL2Balance("eth", opHash));
    await dispatch(getL2Balance("token", opHash));
    await dispatch(updatePool(opHash));
  } catch (e) {
    console.log(e);
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e?.message));
  }
};

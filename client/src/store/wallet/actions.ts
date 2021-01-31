import { updateStatus } from "dlt-operations";
import { toBN } from "../../utils/formatter";
import { ThunkTokenAction } from "../token";
import { getTokenBalance } from "../token/actions";
import { getMainEthBalance } from "../web3/actions";
import { AssetType } from "../../core/asset";
import { getL2Balance } from "../substrate/actions";

export const depositAsset = (
  asset: AssetType,
  amount: number,
  decimals: number,
  opHash?: string
): ThunkTokenAction => async (dispatch, getState) => {
  dispatch(vaultAction("deposit", asset, amount, decimals, opHash));
};

export const withdrawAsset = (
  asset: AssetType,
  amount: number,
  decimals: number,
  opHash?: string
): ThunkTokenAction => async (dispatch, getState) => {
  dispatch(vaultAction("withdraw", asset, amount, decimals, opHash));
};

export const getBalance = (
  asset: AssetType,
  opHash?: string
): ThunkTokenAction => async (dispatch, getState) => {
  if (asset === "eth") {
    await dispatch(getMainEthBalance(opHash));
  } else await dispatch(getTokenBalance(opHash));

  dispatch(getL2Balance(asset, opHash));
};

const vaultAction = (
  action: "deposit" | "withdraw",
  asset: AssetType,
  amount: number,
  decimals: number,
  opHash?: string
): ThunkTokenAction => async (dispatch, getState) => {
  try {
    const { vault, signer } = getState().web3;
    if (!vault || !signer) {
      throw new Error("Cant connect vault contract");
    }

    const receipt =
      action === "deposit"
        ? asset === "eth"
          ? await vault.connect(signer).depositEth({ value: toBN(amount, decimals) })
          : await vault.connect(signer).depositToken(toBN(amount, decimals))
        : asset === "eth"
        ? await vault.connect(signer).withdrawEth(toBN(amount, decimals))
        : await vault.connect(signer).withdrawToken(toBN(amount, decimals));


    await receipt.wait();
    dispatch(updateStatus(opHash, "STATUS.SUCCESS"));
    await receipt.wait(2);
    await dispatch(getBalance(asset, opHash));
  } catch (e) {
    console.log(e);
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e?.message));
  }
};

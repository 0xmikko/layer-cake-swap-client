import { updateStatus } from "dlt-operations";
import { ThunkTokenAction } from "./index";
import {toBN} from "../../utils/formatter";

export const approveToken = (
  amount: number,
  opHash?: string
): ThunkTokenAction => async (dispatch, getState) => {
  try {
    const { token, signer, vault } = getState().web3;
    if (!token || !signer || !vault) {
      throw new Error("Cant connect vault contract");
    }
    // @ts-ignore : Vercel: Property 'address' does not exist on type 'Vault'.  TS2339
    await token.connect(signer).approve(vault.address, toBN(amount));
    dispatch(updateStatus(opHash, "STATUS.SUCCESS"));
  } catch (e) {
    console.log(e);
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e?.message));
    dispatch({ type: "TOKEN_UPDATE_FAILED" });
  }
};

export const getTokenBalance = (opHash?: string): ThunkTokenAction => async (
  dispatch,
  getState
) => {
  try {
    const { token, signer, account } = getState().web3;
    if (!token || !signer || !account) {
      throw new Error("Cant connect vault contract");
    }
    const balance = await token.connect(signer).balanceOf(account);
    dispatch({ type: "TOKEN_UPDATE_BALANCE", payload: { balance } });
  } catch (e) {
    console.log(e);
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e?.message));
    dispatch({ type: "TOKEN_UPDATE_FAILED" });
  }
};

export const getTokenAllowance = (opHash?: string): ThunkTokenAction => async (
  dispatch,
  getState
) => {
  try {
    const { token, signer, account, vault } = getState().web3;
    if (!token || !signer || !account || !vault) {
      throw new Error("Cant connect vault contract");
    }
    const allowance = await token
      .connect(signer)
      // @ts-ignore : Vercel: Property 'address' does not exist on type 'Vault'.  TS2339
      .allowance(account, vault.address);
    dispatch({ type: "TOKEN_UPDATE_ALLOWANCE", payload: { allowance } });
  } catch (e) {
    console.log(e);
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e?.message));
    dispatch({ type: "TOKEN_UPDATE_FAILED" });
  }
};

export const getTokenInfo = (): ThunkTokenAction => async (
  dispatch,
  getState
) => {
  try {
    const { token, signer } = getState().web3;
    if (!token || !signer) {
      throw new Error("Cant connect token contract");
    }

    const name = await token.connect(signer).name();
    const symbol = await token.connect(signer).symbol();
    const decimals = await token.connect(signer).decimals();

    dispatch({
      type: "TOKEN_UPDATE_INFO",
      payload: {
        name,
        symbol,
        decimals,
      },
    });
  } catch (e) {
    console.log(e);
    dispatch(updateStatus("tokenInfo", "STATUS.FAILURE", e?.message));
    dispatch({ type: "TOKEN_UPDATE_FAILED" });
  }
};

import { ApiPromise, WsProvider } from "@polkadot/api";
import { ThunkSubstrateAction } from "./index";
import { updateStatus } from "dlt-operations";
import { BigNumber } from "ethers";
import {AssetType} from "../../core/asset";
import {SUBSTRATE_ENDPOINT} from "../../config";

export const connect = (): ThunkSubstrateAction => async (
  dispatch,
  getState
) => {
  // Construct
  const wsProvider = new WsProvider(SUBSTRATE_ENDPOINT);
  const api = await ApiPromise.create({
    provider: wsProvider,
    types: {
      EthAddress: "H160",
      Uint256: "U256",
      SenderAmouht: {
        sender: "EthAddress",
        amount: "Uint256",
      },
    },
  });

  const pool = await api.query.polkaSwap.poolTokenLiquidity();
  console.log("POOL", pool.toHuman());
  // Do something
  console.log("API", api.genesisHash.toHex());
  dispatch({ type: "SUBSTRATE_CONNECTED", payload: { api } });
};

export const getL2Balance = (
  asset: AssetType,
  opHash: string = "0"
): ThunkSubstrateAction => async (dispatch, getState) => {
  try {
    const subApi = getState().substrate.api;
    if (!subApi) throw new Error("No substrate instance");

    const account = getState().web3.account;
    if (!account) throw new Error("No account set");

    const ethBalance =
      asset === "eth"
        ? await subApi.query.polkaSwap.ethBalance(account)
        : await subApi.query.polkaSwap.tokenBalance(account);
    const BNBalance = BigNumber.from(ethBalance.toHex());
    dispatch({
      type:
        asset === "eth"
          ? "SUBSTRATE_ETH_BALANCE_SUCCESS"
          : "SUBSTRATE_TOKEN_BALANCE_SUCCESS",
      payload: BNBalance,
    });
    dispatch(updateStatus(opHash, "STATUS.SUCCESS"));
  } catch (e) {
    dispatch(updateStatus(opHash, "STATUS.FAILURE", e));
  }
};

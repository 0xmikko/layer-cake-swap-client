import { RootState } from "../index";
import { Vault } from "../../../../types/ethers-v5/Vault";
import {BigNumberish, providers, Signer} from "ethers";
import { Web3Error } from "../../core/web3";
import { ThunkAction } from "redux-thunk";

export const web3Selector = (state: RootState) => state.web3;

export type Web3Actions =
  | {
      type: "WEB3_CONNECTED";
      payload: {
        provider: providers.Web3Provider;
        networkId: number;
        account: string;
        signer: Signer;
        vault?: Vault;
      };
    }
  | {
      type: "WEB3_FAILED";
      payload: { error: Web3Error };
    }
  | {
      type: "WEB3_BALANCE_SUCCESS";
      payload: BigNumberish;
    };

export type ThunkWeb3Action = ThunkAction<
  void,
  RootState,
  unknown,
  Web3Actions
>;

import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { SubstrateState } from "../../core/substrate";
import {BigNumber} from "ethers";
import {OperationActions} from "dlt-operations";

export type SubstrateActions =
  | {
      type: "SUBSTRATE_CONNECTED";
      payload: SubstrateState;
    }
  | {
      type: "SUBSTRATE_ETH_BALANCE_SUCCESS";
      payload: BigNumber;
    }
  | {
      type: "SUBSTRATE_TOKEN_BALANCE_SUCCESS";
      payload: BigNumber;
    };

export type ThunkSubstrateAction = ThunkAction<
  void,
  RootState,
  unknown,
  SubstrateActions | OperationActions
>;

import {BigNumber, BigNumberish} from "ethers";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {OperationActions} from "dlt-operations";

export type TokenActions =
    | {
    type: "TOKEN_UPDATE_INFO";
    payload: {
        name: string,
        symbol: string,
        decimals: number
    };
}
  | {
      type: "TOKEN_UPDATE_BALANCE";
      payload: {
        balance: BigNumber;
      };
    }
  | {
      type: "TOKEN_UPDATE_ALLOWANCE";
      payload: {
        allowance: BigNumberish;
      };
    }
  | {
      type: "TOKEN_UPDATE_FAILED";
    };

export type ThunkTokenAction = ThunkAction<
    void,
    RootState,
    unknown,
    TokenActions | OperationActions
    >;

import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {OperationActions} from "dlt-operations";
import {Pool} from "../../core/pool";

export type PoolActions =
  | {
      type: "POOL_UPDATE_SUCCESS";
      payload: Pool;
    };

export type ThunkPoolAction = ThunkAction<
  void,
  RootState,
  unknown,
  PoolActions | OperationActions
>;

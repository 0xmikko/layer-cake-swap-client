import { PoolActions } from "./index";
import {Pool} from "../../core/pool";
import {BigNumber} from "ethers";

export type PoolState = Pool;

const initialState: PoolState = {
  tokenLiquidity: BigNumber.from(0),
  ethLiquidity: BigNumber.from(0),
  balance: BigNumber.from(0),
  rate: 0,

};

export default function createReducer(
  state: PoolState = initialState,
  action: PoolActions
): PoolState {
  switch (action.type) {
    case "POOL_UPDATE_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };
  }

  return state;
}

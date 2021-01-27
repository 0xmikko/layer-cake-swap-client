import { SubstrateActions } from "./index";
import { SubstrateState } from "../../core/substrate";

const initialState: SubstrateState = {
};

export default function createReducer(
  state: SubstrateState = initialState,
  action: SubstrateActions
): SubstrateState {
  switch (action.type) {
    case "SUBSTRATE_CONNECTED":
      return {
        ...state,
        ...action.payload,
      };
    case "SUBSTRATE_ETH_BALANCE_SUCCESS":
      return {
        ...state,
        ethBalance: action.payload,
      };
    case "SUBSTRATE_TOKEN_BALANCE_SUCCESS":
      return {
        ...state,
        tokenBalance: action.payload,
      };
  }

  return state;
}

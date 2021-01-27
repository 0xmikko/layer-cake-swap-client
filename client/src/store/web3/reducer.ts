import { Web3Actions } from "./index";
import { Web3State } from "../../core/web3";

const initialState: Web3State = {
  status: "WEB3_STARTUP",
};

export default function createReducer(
  state: Web3State = initialState,
  action: Web3Actions
): Web3State {
  switch (action.type) {

    case "WEB3_CONNECTED":
      return {
        ...state,
        ...action.payload,
        status: "WEB3_CONNECTED",
      };

    case "WEB3_FAILED":
      return {
        account: undefined,
        signer: undefined,
        status: "NO_WEB3",
        error: action.payload.error,
      };

    case "WEB3_BALANCE_SUCCESS":
      return {
        ...state,
        balance: action.payload,
      };
  }

  return state;
}

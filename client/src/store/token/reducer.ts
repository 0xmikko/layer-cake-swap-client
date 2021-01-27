import { TokenActions } from "./index";
import { BigNumberish } from "ethers";

export interface TokenState {
  name: string;
  symbol: string;
  decimals: number;
  address?: string;
  balance?: BigNumberish;
  allowance?: BigNumberish;
  infoLoaded: boolean;
}

const initialState: TokenState = {
  name: "loading...",
  symbol: "loading...",
  decimals: 18,
  infoLoaded: false,
};

export default function createReducer(
  state: TokenState = initialState,
  action: TokenActions
): TokenState {
  switch (action.type) {
    case "TOKEN_UPDATE_INFO":
      return {
        ...state,
        ...action.payload,
        infoLoaded: true,
      };

    case "TOKEN_UPDATE_BALANCE":
    case "TOKEN_UPDATE_ALLOWANCE":
      return {
        ...state,
        ...action.payload,
      };
  }

  return state;
}

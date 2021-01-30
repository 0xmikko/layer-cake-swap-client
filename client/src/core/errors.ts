import { Web3Error } from "./web3";

export interface ErrorMsg {
  title: string;
  description: string;
}

export function errorByCode(error: Web3Error | undefined): ErrorMsg {
  let msg: ErrorMsg = {
    title: "Unknown error",
    description: "Please, reload page",
  };
  switch (error) {
    case "CONNECTION_ERROR":
      return {
        title: "Connection error",
        description:
          "Please, connect Metamask or other Web3 provider to continue.",
      };
    case "WRONG_NETWORK_ERROR":
      return {
        title: "Wrong network",
        description:
          "Sorry, this solution works on testnet network only. Please, switch your metamask and reload the page.",
      };
  }

  return msg;
}

import { ethers } from "ethers";
import { updateStatus } from "dlt-operations";
import { ThunkWeb3Action } from "./index";
import { CHAIN_ID, TOKEN_ADDRESS, VAULT_ADDRESS } from "../../config";
import { Vault } from "../../../../types/ethers-v5/Vault";
import { TokenMock } from "../../../../types/ethers-v5/TokenMock";

declare global {
  interface Window {
    ethereum: any;
  }
}

const vaultJson = require("../../abi/core/Vault.sol/Vault.json");
const tokenJson = require("../../abi/mock/MockERC20.sol/TokenMock.json");

export const connectWeb3 = (): ThunkWeb3Action => async (dispatch) => {
  try {
    if (window.ethereum) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.on("error", (tx) => {
        console.log("Web3 error");
      });
      const signer = provider.getSigner();

      const networkId = await provider.detectNetwork();
      console.log("NID", await signer.getAddress());

      if (networkId.chainId !== CHAIN_ID) {
        dispatch({
          type: "WEB3_FAILED",
          payload: { error: "WRONG_NETWORK_ERROR" },
        });
        return;
      }

      const vault = ((await ethers.ContractFactory.getContract(
        VAULT_ADDRESS || "",
        vaultJson.abi,
        signer
      )) as unknown) as Vault;

      const token = ((await ethers.ContractFactory.getContract(
        TOKEN_ADDRESS || "",
        tokenJson.abi,
        signer
      )) as unknown) as TokenMock;

      dispatch({
        type: "WEB3_CONNECTED",
        payload: {
          provider,
          account: await signer.getAddress(),
          signer,
          networkId: networkId.chainId,
          vault,
          token,
        },
      });
    } else {
      throw new Error("No ethereum instance detected");
    }
  } catch (e) {
    dispatch({ type: "WEB3_FAILED", payload: { error: "CONNECTION_ERROR" } });
  }
};

export const getMainEthBalance = (opHash: string = "0"): ThunkWeb3Action => async (
  dispatch,
  getState
) => {
  try {
    const { provider, account } = getState().web3;
    if (!provider || !account) {
      throw new Error("Cant get 23b instance");
    }
    const balance = await provider?.getBalance(account);
    console.log(balance, account)
    dispatch({ type: "WEB3_BALANCE_SUCCESS", payload: balance });
    updateStatus(opHash, "STATUS.SUCCESS");
  } catch (e) {
    updateStatus(opHash, "STATUS.FAILURE", e);
  }
};

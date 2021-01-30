import {BigNumberish, providers, Signer} from "ethers";
import { Vault } from "../../../types/ethers-v5/Vault";
import { TokenMock } from "../../../types/ethers-v5/TokenMock";

export type Web3Status = "WEB3_STARTUP" | "WEB3_CONNECTED" | "NO_WEB3";

export type Web3Error = "NO_ERROR" | "CONNECTION_ERROR" | "WRONG_NETWORK_ERROR";

export interface Web3State {
    provider?: providers.Web3Provider;
    account?: string;
    balance?: BigNumberish;
    signer?: Signer;
    vault?: Vault;
    token?: TokenMock;

    status: Web3Status;
    error?: Web3Error;
}


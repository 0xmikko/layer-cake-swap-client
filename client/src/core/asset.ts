import { BigNumber } from "ethers";

export type AssetType = "eth" | "token";

export interface Asset {
    name: string;
    symbol: string;
    address: string;
    mainBalance: BigNumber;
    l2Balance: BigNumber;
    allowance: BigNumber;
    decimals: number;
}

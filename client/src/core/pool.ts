import {BigNumber} from "ethers";

export interface Pool {
    ethLiquidity: BigNumber,
    tokenLiquidity: BigNumber,
    balance: BigNumber,
    rate: number


}

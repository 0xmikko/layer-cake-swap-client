import {ApiPromise} from "@polkadot/api"
import {BigNumber} from "ethers";

export interface SubstrateState {
    api?: ApiPromise,
    ethBalance?: BigNumber,
    tokenBalance?: BigNumber,
}

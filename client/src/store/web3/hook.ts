import {Web3State} from "../../core/web3";
import {useSelector} from "react-redux";
import {web3Selector} from "./index";

export function useWeb3() : Web3State {
    return useSelector(web3Selector);
}


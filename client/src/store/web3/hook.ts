import {Web3State} from "../../core/web3";
import {useDispatch, useSelector} from "react-redux";
import {web3Selector} from "./index";
import {useEffect} from "react";
import actions from "../actions";

export function useWeb3() : Web3State {
    const dispatch = useDispatch();

    const web3 = useSelector(web3Selector);
    const {provider} = web3;

    useEffect(() => {
        if (provider) {
            dispatch(actions.wallet.getBalance("eth", "wallet"));
            dispatch(actions.wallet.getBalance("token", "wallet"));
            dispatch(actions.token.getTokenAllowance( "wallet"));
            dispatch(actions.token.getTokenInfo());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provider]);

    return web3
}


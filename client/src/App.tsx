import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {LoadingView} from "rn-web-components";
import actions from "./store/actions";
import {Web3Connect} from "./components/Web3Connect";
import {Router} from "./screens/Router";
import {useWeb3} from "./store/web3/hook";

export function App(): React.ReactElement {
  const dispatch = useDispatch();
  const { status, error } = useWeb3();

  useEffect(() => {
    console.log("STATUS", status);
    switch (status) {
      case "WEB3_STARTUP":
        dispatch(actions.web3.connectWeb3());
        dispatch(actions.substrate.connect())
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    dispatch(actions.web3.connectWeb3());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.ethereum]);

  switch (status) {
    default:
    case "WEB3_STARTUP":
      return <LoadingView />;
    case "WEB3_CONNECTED":
      return <Router />;
    case "NO_WEB3":
      return <Web3Connect error={error || "CONNECTION_ERROR"} />;
  }
}

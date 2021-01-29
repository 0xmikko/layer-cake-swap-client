import React, {useEffect} from "react";
import {useWeb3} from "../../store/web3/hook";
import {useDispatch} from "react-redux";
import actions from "../../store/actions";
import {StyledConnectButton} from "./styles";
import {shortAddress} from "../../utils/formatter";

export function AppBarWallet() {
  const dispatch = useDispatch();
  const { status, error, account } = useWeb3();

  const connect = () => {
    dispatch(actions.web3.connectWeb3());
    dispatch(actions.substrate.connect());
  };

  useEffect(() => {
    console.log("STATUS", status);
    switch (status) {
      case "WEB3_STARTUP":
        connect();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.ethereum]);

  switch (status) {
    default:
    case "WEB3_STARTUP":
      return (
        <StyledConnectButton style={{ whiteSpace: "nowrap" }} onClick={connect}>
          Connect web3
        </StyledConnectButton>
      );
    case "WEB3_CONNECTED":
      return (
        <StyledConnectButton style={{ whiteSpace: "nowrap" }}>
          {shortAddress(account)}
        </StyledConnectButton>
      );
    case "NO_WEB3":
      return <StyledConnectButton style={{ whiteSpace: "nowrap" }}>
        SHIT
      </StyledConnectButton>
  }
}

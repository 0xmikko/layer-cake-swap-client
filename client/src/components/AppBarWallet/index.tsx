import React, { useEffect } from "react";
import { useWeb3 } from "../../store/web3/hook";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import { Web3Connect } from "../Web3Connect";
import { StyledConnectButton } from "./styles";
import { shortAddress } from "../../utils/formatter";

export function AppBarWallet() {
  const dispatch = useDispatch();
  const { status, account } = useWeb3();

  useEffect(() => {
    dispatch(actions.web3.connectWeb3());
  }, []);

  switch (status) {
    default:
    case "WEB3_STARTUP":
      return (
        <StyledConnectButton style={{ whiteSpace: "nowrap" }}>
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
      return <Web3Connect error={"CONNECTION_ERROR"} />;
  }
}

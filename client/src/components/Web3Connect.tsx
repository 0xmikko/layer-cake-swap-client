import React from "react";
import { InfoScreen } from "../theme";
import styled from "styled-components";
import {Web3Error} from "../core/web3";

export interface Web3ConnectProps {
  error: Web3Error;
}

export const LogoImg = styled.img`
  height: 120px;
  margin-bottom: 20px;
`;

export function Web3Connect({ error }: Web3ConnectProps): React.ReactElement {
  let message = "";
  switch (error) {
    default:
    case "CONNECTION_ERROR":
      message = "Please, connect Metamask or other Web3 provider to continue.";
      break;
    case "WRONG_NETWORK_ERROR":
      message =
        "Sorry, this solution works on testnet network only. Please, switch your metamask and reload the page.";
      break;
  }

  return (
    <InfoScreen>
      <LogoImg src={"/logo.png"} alt={"Logo"} />
      <h5>{message}</h5>
    </InfoScreen>
  );
}

import React, { useEffect } from "react";
import { useWeb3 } from "../../store/web3/hook";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import { ConnectButtonErrorS, ConnectButtonS } from "./styles";
import { shortAddress } from "../../utils/formatter";
import { errorByCode } from "../../core/errors";
import { Web3Error } from "../../core/web3";

export function AppBarWallet() {
  const dispatch = useDispatch();
  const { status, error, account } = useWeb3();

  const connect = () => {
    dispatch(actions.web3.connectWeb3());
    dispatch(actions.substrate.connect());
  };

  useEffect(() => {
    if (status === "WEB3_STARTUP") connect();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, window.ethereum]);

  const onError = (e: Web3Error | undefined) => {
    const msg = errorByCode(e);
    dispatch(actions.modal.show(msg.title, msg.description));
  };

  switch (status) {
    default:
    case "WEB3_STARTUP":
      return (
        <ConnectButtonS style={{ whiteSpace: "nowrap" }} onClick={connect}>
          Connect web3
        </ConnectButtonS>
      );
    case "WEB3_CONNECTED":
      return (
        <ConnectButtonS style={{ whiteSpace: "nowrap" }}>
          {shortAddress(account)}
        </ConnectButtonS>
      );
    case "NO_WEB3":
      const msg = errorByCode(error);
      return (
        <ConnectButtonErrorS
          style={{ whiteSpace: "nowrap" }}
          onClick={() => onError(error)}
        >
          {msg.title.toUpperCase()}
        </ConnectButtonErrorS>
      );
  }
}

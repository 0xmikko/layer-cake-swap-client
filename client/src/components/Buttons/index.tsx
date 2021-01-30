import React, { PropsWithChildren } from "react";
import { Web3Error } from "../../core/web3";
import { errorByCode } from "../../core/errors";
import actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { useWeb3 } from "../../store/web3/hook";
import { Button100W, Web3ConnectButton } from "./styles";

export function Web3ButtonWrapper({
  children,
}: PropsWithChildren<any>): React.ReactElement {
  const dispatch = useDispatch();
  const { status, error, account } = useWeb3();

  const onError = (e: Web3Error | undefined) => {
    const msg = errorByCode(e);
    dispatch(actions.modal.show(msg.title, msg.description));
  };

  return status === "WEB3_CONNECTED" ? (
    children
  ) : (
    <Web3ConnectButton>Connect web3</Web3ConnectButton>
  );
}

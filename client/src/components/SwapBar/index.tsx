import React, {useEffect, useState} from "react";
import { StyledSwapCard } from "./styles";
import { BigButton } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { web3Selector } from "../../store/web3";
import { SmartField } from "../SmartField";
import { Text } from "rebass";
import {useToken} from "../../store/token/hook";

export function SwapBar(): React.ReactElement {
  const dispatch = useDispatch();
  const { vault } = useSelector(web3Selector);

  const [hash, setHash] = useState("0");

  useEffect(() => {
      dispatch(actions.token.getTokenBalance());
  }, [])


  const onApprove = () => {
    // if (vault) dispatch(actions.token.approveToken(vault.address, "1000"));
  };
  // const onDepositToken = () => dispatch(actions.vault.depositToken());
  // const onDepositEth = () => dispatch(actions.vault.depositEth());

    const {balance} = useToken();

  return (
    <StyledSwapCard>
      <h1>Swap</h1>
      <SmartField direction={"From"} currency={"Token"} amount={balance || "0"} />
      <SmartField direction={"To"} currency={"Eth"} amount={balance || "0"} />
      <BigButton onClick={onApprove}>Approve Token</BigButton>
    </StyledSwapCard>
  );
}

import React, {useEffect} from "react";
import {TransferCard} from "../../components/TransferCard";
import {useDispatch} from "react-redux";
import actions from "../../store/actions";
import {useWeb3} from "../../store/web3/hook";

export function WalletScreen(): React.ReactElement {

  const dispatch = useDispatch();
  const {provider } = useWeb3();



  return (
    <>
      <h1>Wallet</h1>
      <TransferCard asset={"eth"} />
      <div style={{ marginTop: "20px" }} />
      <TransferCard asset={"token"}/>
    </>
  );
}

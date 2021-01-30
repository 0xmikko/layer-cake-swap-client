import React from "react";
import {TransferCard} from "../../components/TransferCard";

export function WalletScreen(): React.ReactElement {


  return (
    <>
      <h1>Wallet</h1>
      <TransferCard asset={"eth"} />
      <div style={{ marginTop: "20px" }} />
      <TransferCard asset={"token"}/>
    </>
  );
}

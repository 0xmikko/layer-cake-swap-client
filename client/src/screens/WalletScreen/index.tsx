import React, { useEffect } from "react";
import { TransferCard } from "../../components/TransferCard";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import { etherIcon, tokenIcon } from "../../assets/icons";

export function WalletScreen(): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.wallet.getBalance("eth"));
    dispatch(actions.wallet.getBalance("token"));
  }, []);

  return (
    <>
      <h1>Wallet</h1>
      <TransferCard asset={"eth"} icon={etherIcon} />
      <div style={{ marginTop: "20px" }} />
      <TransferCard asset={"token"} icon={tokenIcon} />
    </>
  );
}

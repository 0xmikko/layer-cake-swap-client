import React, { useEffect, useState } from "react";
import { TransferCard } from "../../components/TransferCard";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";

export function WalletScreen(): React.ReactElement {
  const [blockNumberTimer, setBlockNumberTimer] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.wallet.getBalance("eth"));
    dispatch(actions.wallet.getBalance("token"));
    dispatch(actions.token.getTokenAllowance());
  }, [blockNumberTimer]);

  const timer = () => {
    setBlockNumberTimer((time) => time + 1);
  };

  useEffect(() => {
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>Wallet</h1>
      <TransferCard asset={"eth"} />
      <div style={{ marginTop: "20px" }} />
      <TransferCard asset={"token"} />
    </>
  );
}

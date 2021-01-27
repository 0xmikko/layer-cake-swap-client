import React, { useEffect, useState } from "react";
import { ButtonBar, ProcessingButton, TransferButton } from "./styles";
import { SmartNumberInput } from "../SmartNumberInput";
import { AssetType } from "../../core/asset";
import actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { useOperation } from "dlt-operations";

type DepositButtonState = "SELECT" | "DEPOSIT" | "WITHDRAW" | "PROCESSING";

export interface DepositButtonBarProps {
  asset: AssetType;
}

export function DepositButtonBar({
  asset,
}: DepositButtonBarProps): React.ReactElement {
  const [state, setState] = useState<DepositButtonState>("SELECT");
  const [depositSum, setDepositSum] = useState(0);
  const [withdrawSum, setWithdrawSum] = useState(0);
  const [hash, setHash] = useState("0");

  let view: React.ReactElement;

  const dispatch = useDispatch();

  const onCommandPressed = (action: "deposit" | "withdraw") => {
    setState("PROCESSING");
    const newHash = Date.now().toString();
    setHash(newHash);
    if (action === "deposit") {
      dispatch(actions.wallet.depositAsset(asset, depositSum, newHash));
    } else {
      dispatch(actions.wallet.withdrawAsset(asset, withdrawSum, newHash));
    }
  };

  const operation = useOperation(hash);

  useEffect(() => {
    if (hash !== "0") {
      switch (operation?.status) {
        case "STATUS.SUCCESS":
          setState("SELECT");
          break;
        case "STATUS.FAILURE":
          alert(operation?.error);
          setState("SELECT");
          break;
      }
    }
  }, [hash, operation?.status]);

  switch (state) {
    case "SELECT":
      view = (
        <>
          <TransferButton onClick={() => setState("DEPOSIT")}>
            Deposit &rarr;
          </TransferButton>
          <TransferButton onClick={() => setState("WITHDRAW")}>
            &larr; Withdraw
          </TransferButton>
        </>
      );
      break;
    case "DEPOSIT":
      view = (
        <>
          <SmartNumberInput onChangeNum={setDepositSum} />
          <TransferButton onClick={() => onCommandPressed("deposit")}>
            Deposit &rarr;
          </TransferButton>
        </>
      );
      break;
    case "WITHDRAW":
      view = (
        <>
          <SmartNumberInput onChangeNum={setWithdrawSum} />
          <TransferButton onClick={() => onCommandPressed("withdraw")}>
            &larr; Withdraw
          </TransferButton>
        </>
      );
      break;
    case "PROCESSING":
      view = <ProcessingButton>Processing...</ProcessingButton>;
      break;
  }

  return <ButtonBar>{view}</ButtonBar>;
}

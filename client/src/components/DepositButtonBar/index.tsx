import React, { useEffect, useState } from "react";
import { ButtonBar, ProcessingButton, TransferButton } from "./styles";
import { SmartNumberInput } from "../SmartNumberInput";
import { AssetType } from "../../core/asset";
import actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { useOperation } from "dlt-operations";
import { useToken } from "../../store/token/hook";
import { BigNumber } from "ethers";

type DepositButtonState =
  | "SELECT"
  | "DEPOSIT"
  | "ALLOWANCE"
  | "WITHDRAW"
  | "PROCESSING";

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

  useEffect(() => {
    dispatch(actions.token.getTokenAllowance());
  }, []);

  let view: React.ReactElement;

  const dispatch = useDispatch();
  const { allowance } = useToken();

  const onCommandPressed = (action: "deposit" | "approve" | "withdraw") => {
    setState("PROCESSING");
    const newHash = Date.now().toString();
    setHash(newHash);
    switch (action) {
      case "deposit":
        dispatch(actions.wallet.depositAsset(asset, depositSum, newHash));
        break;
      case "approve":
        dispatch(actions.token.approveToken(depositSum, newHash));
        break;
      case "withdraw":
        dispatch(actions.wallet.withdrawAsset(asset, withdrawSum, newHash));
        break;
    }
  };

  const depositNextAction = () => {
    if (asset === "eth") {
      setState("DEPOSIT");
    } else {
      setState(
        BigNumber.from(allowance || 0).isZero()
          ? "ALLOWANCE"
          : "DEPOSIT"
      );
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
          <TransferButton onClick={depositNextAction}>
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
    case "ALLOWANCE":
      view = (
        <>
          <SmartNumberInput onChangeNum={setDepositSum} />
          <TransferButton onClick={() => onCommandPressed("approve")}>
            Approve
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

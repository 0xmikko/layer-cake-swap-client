import React, { useEffect, useState } from "react";
import { ButtonBar } from "./styles";
import { SmartNumberInput } from "../SmartNumberInput";
import { AssetType } from "../../core/asset";
import actions from "../../store/actions";
import { useDispatch } from "react-redux";
import { useOperation } from "dlt-operations";
import { useToken } from "../../store/token/hook";
import { BigNumber } from "ethers";
import { Button100W, Button40W } from "../Buttons/styles";
import { useAssets } from "../../store/wallet/hook";

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
  const [action, setAction] = useState("");

  const dispatch = useDispatch();
  const { allowance, balance } = useToken();
  const { decimals}  =useAssets(asset);

  useEffect(() => {
    dispatch(actions.token.getTokenAllowance());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance]);

  let view: React.ReactElement;

  const onCommandPressed = (action: "deposit" | "approve" | "withdraw") => {
    setState("PROCESSING");
    const newHash = Date.now().toString();
    setHash(newHash);
    setAction(action);
    switch (action) {
      case "deposit":
        dispatch(actions.wallet.depositAsset(asset, depositSum, decimals, newHash));
        break;
      case "approve":
        dispatch(actions.token.approveToken(depositSum, decimals, newHash));
        break;
      case "withdraw":
        dispatch(actions.wallet.withdrawAsset(asset, withdrawSum, decimals, newHash));
        break;
    }
  };

  const depositNextAction = () => {
    if (asset === "eth") {
      setState("DEPOSIT");
    } else {
      setState(
        BigNumber.from(allowance || 0).isZero() ? "ALLOWANCE" : "DEPOSIT"
      );
    }
  };

  const operation = useOperation(hash);

  useEffect(() => {
    if (hash !== "0") {
      switch (operation?.status) {
        case "STATUS.SUCCESS":
          const amount = action === "withdraw" ? withdrawSum : depositSum;
          dispatch(
            actions.modal.show(
              "Operation submitted",
              `You ${action} operation from for ${amount} was successfully submitted`
            )
          );
          setState("SELECT");
          break;
        case "STATUS.FAILURE":
          dispatch(
            actions.modal.show("Error", operation?.error || "Unknown error")
          );
          setHash("0");
          setState("SELECT");
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, operation?.status]);

  switch (state) {
    case "SELECT":
      view = (
        <>
          <Button40W onClick={depositNextAction}>Deposit &rarr;</Button40W>
          <Button40W onClick={() => setState("WITHDRAW")}>
            &larr; Withdraw
          </Button40W>
        </>
      );
      break;
    case "DEPOSIT":
      view = (
        <>
          <SmartNumberInput onChangeNum={setDepositSum} />
          <Button40W onClick={() => onCommandPressed("deposit")}>
            Deposit &rarr;
          </Button40W>
        </>
      );
      break;
    case "ALLOWANCE":
      view = (
        <>
          <SmartNumberInput onChangeNum={setDepositSum} />
          <Button40W onClick={() => onCommandPressed("approve")}>
            Approve
          </Button40W>
        </>
      );
      break;
    case "WITHDRAW":
      view = (
        <>
          <SmartNumberInput onChangeNum={setWithdrawSum} />
          <Button40W onClick={() => onCommandPressed("withdraw")}>
            &larr; Withdraw
          </Button40W>
        </>
      );
      break;
    case "PROCESSING":
      view = <Button100W>Processing...</Button100W>;
      break;
  }

  return <ButtonBar>{view}</ButtonBar>;
}

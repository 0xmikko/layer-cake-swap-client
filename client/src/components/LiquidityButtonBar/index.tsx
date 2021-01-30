import React, {useEffect, useState} from "react";
import {ButtonBar} from "./styles";
import {SmartNumberInput} from "../SmartNumberInput";
import actions from "../../store/actions";
import {useDispatch} from "react-redux";
import {useOperation} from "dlt-operations";
import {Button100W, Button40W} from "../Buttons/styles";

type LiquidityButtonState =
  | "SELECT"
  | "ADD"
  | "REMOVE"
  | "PROCESSING";


export function LiquidityButtonBar(): React.ReactElement {
  const [state, setState] = useState<LiquidityButtonState>("SELECT");
  const [amount, setAmount] = useState(0);
  const [hash, setHash] = useState("0");
  const [action, setAction] = useState("add");

  useEffect(() => {
    dispatch(actions.token.getTokenAllowance());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let view: React.ReactElement;

  const dispatch = useDispatch();

  const onCommandPressed = (action: "add" | "remove") => {
    setState("PROCESSING");
    setAction(action);
    const newHash = Date.now().toString();
    setHash(newHash);
    dispatch(actions.pool.liquidityAction(action, amount, newHash))
  };

  const operation = useOperation(hash);

  useEffect(() => {
    if (hash !== "0") {
      switch (operation?.status) {
        case "STATUS.SUCCESS":
          dispatch(
              actions.modal.show(
                  "Operation submitted",
                  `You ${action} liquidity operation for ${amount} was successfully submitted`
              )
          );
          setState("SELECT");
          setHash("0");
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
          <Button40W onClick={() => setState("ADD")}>
            Add &rarr;
          </Button40W>
          <Button40W onClick={() => setState("REMOVE")}>
            &larr; Remove
          </Button40W>
        </>
      );
      break;
    case "ADD":
      view = (
        <>
          <SmartNumberInput onChangeNum={setAmount} />
          <Button40W onClick={() => onCommandPressed("add")}>
            Add &rarr;
          </Button40W>
        </>
      );
      break;
    case "REMOVE":
      view = (
        <>
          <SmartNumberInput onChangeNum={setAmount} />
          <Button40W onClick={() => onCommandPressed("remove")}>
            &larr; Remove
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

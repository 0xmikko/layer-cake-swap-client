import React, {useEffect, useState} from "react";
import {ButtonBar} from "./styles";
import {SmartNumberInput} from "../SmartNumberInput";
import actions from "../../store/actions";
import {useDispatch} from "react-redux";
import {useOperation} from "dlt-operations";
import {useToken} from "../../store/token/hook";
import {Button100W, Button40W } from "../Buttons/styles";

type LiquidityButtonState =
  | "SELECT"
  | "ADD"
  | "REMOVE"
  | "PROCESSING";


export function LiquidityButtonBar(): React.ReactElement {
  const [state, setState] = useState<LiquidityButtonState>("SELECT");
  const [liquiditySum, setLiquiditySum] = useState(0);
  const [hash, setHash] = useState("0");

  useEffect(() => {
    dispatch(actions.token.getTokenAllowance());
  }, []);

  let view: React.ReactElement;

  const dispatch = useDispatch();
  const { allowance } = useToken();

  const onCommandPressed = (action: "add" | "remove") => {
    setState("PROCESSING");
    const newHash = Date.now().toString();
    setHash(newHash);
    dispatch(actions.pool.liquidityAction(action, liquiditySum, newHash))
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
          <SmartNumberInput onChangeNum={setLiquiditySum} />
          <Button40W onClick={() => onCommandPressed("add")}>
            Add &rarr;
          </Button40W>
        </>
      );
      break;
    case "REMOVE":
      view = (
        <>
          <SmartNumberInput onChangeNum={setLiquiditySum} />
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

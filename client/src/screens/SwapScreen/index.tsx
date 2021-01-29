import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DarrContainerS, InputBlockS, SwapButtonS } from "./styles";
import { AmountInput } from "../../components/AmountInput";
import { CurrencySelector } from "../../components/CurrencySelector";
import { AssetType } from "../../core/asset";
import { usePool } from "../../store/pool/hook";
import actions from "../../store/actions";
import {HBar, RateTitle, StyledCard} from "../../theme";

export interface SmartFieldProps {}

export function SwapScreen({}: SmartFieldProps): React.ReactElement {
  const [target, setTarget] = useState<AssetType>("token");
  const [source, setSource] = useState<AssetType>("eth");
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.pool.updatePool());
  }, []);

  const { rate } = usePool();

  const anotherAsset = (a: AssetType) => (a === "eth" ? "token" : "eth");

  const onSelect = (a: AssetType, selector: "src" | "trg") => {
    setSource(selector === "src" ? a : anotherAsset(a));
    setTarget(selector === "trg" ? a : anotherAsset(a));
  };

  const currentRate = target === "token" ? rate : 1 / rate;
  const swapButtonText =
    target === "token" ? "Swap ETH to Token" : "Swap token to ETH";

  const onSwap = () => {};

  return (
    <>
      <h1>Swap</h1>
      <HBar>
        <RateTitle> Rate: {currentRate.toFixed(4)}</RateTitle>
      </HBar>
      <StyledCard>
        <InputBlockS>
          <AmountInput
            title={"From"}
            amount={amount / currentRate}
            disabled={true}
          />
          <CurrencySelector
            selected={source}
            onSelect={(a) => onSelect(a, "src")}
          />
        </InputBlockS>
      </StyledCard>
      <DarrContainerS>&darr;</DarrContainerS>
      <StyledCard>
        <InputBlockS>
          <AmountInput title={"To"} amount={amount} setAmount={setAmount} />
          <CurrencySelector
            selected={target}
            onSelect={(a) => onSelect(a, "trg")}
          />
        </InputBlockS>
      </StyledCard>

      <SwapButtonS onClick={onSwap}>{swapButtonText}</SwapButtonS>
    </>
  );
}

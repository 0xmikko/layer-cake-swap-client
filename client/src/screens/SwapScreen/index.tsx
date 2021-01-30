import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DarrContainerS, InputBlockS } from "./styles";
import { AmountInput } from "../../components/AmountInput";
import { CurrencySelector } from "../../components/CurrencySelector";
import { AssetType } from "../../core/asset";
import { usePool } from "../../store/pool/hook";
import actions from "../../store/actions";
import { HBar, RateTitle, StyledCard, VSpace } from "../../theme";
import { Web3ButtonWrapper } from "../../components/Buttons";
import { Button100W } from "../../components/Buttons/styles";
import { useOperation } from "dlt-operations";
import { useSubstrate } from "../../store/substrate/hook";
import { useWeb3 } from "../../store/web3/hook";
import { useAssets } from "../../store/wallet/hook";

export interface SmartFieldProps {}

export function SwapScreen({}: SmartFieldProps): React.ReactElement {
  const [target, setTarget] = useState<AssetType>("token");
  const [source, setSource] = useState<AssetType>("eth");
  const [amount, setAmount] = useState(0);
  const [hash, setHash] = useState("0");

  const dispatch = useDispatch();
  const { api } = useSubstrate();
  const { provider } = useWeb3();

  useEffect(() => {
    if (provider) dispatch(actions.token.getTokenInfo());
    if (api && provider) dispatch(actions.pool.updatePool());
  }, [api, provider]);

  const { rate } = usePool();
  const ethAsset = useAssets("eth");
  const tokenAsset = useAssets("token");

  const anotherAsset = (a: AssetType) => (a === "eth" ? "token" : "eth");

  const onSelect = (a: AssetType, selector: "src" | "trg") => {
    setSource(selector === "src" ? a : anotherAsset(a));
    setTarget(selector === "trg" ? a : anotherAsset(a));
  };

  const currentRate = target === "token" ? rate : 1 / rate;

  const onSwap = () => {
    const newHash = Date.now().toString();
    dispatch(actions.pool.swapAction(target, amount, newHash));
    setHash(newHash);
  };

  const operation = useOperation(hash);

  const fromAsset = source === "eth" ? ethAsset.symbol : tokenAsset.symbol;
  const toAsset = target === "eth" ? ethAsset.symbol : tokenAsset.symbol;

  const humanRate = `${rate.toFixed(4)} ${fromAsset} / ${toAsset}`;
  const swapButtonText = `Swap ${fromAsset} to ${toAsset}`;

  useEffect(() => {
    if (hash !== "0") {
      switch (operation?.status) {
        case "STATUS.SUCCESS":
          dispatch(
            actions.modal.show(
              "Operation submitted",
              `You swap operation from ${source} to ${target} for ${amount} was successfully submitted`
            )
          );
          setAmount(0);
          setHash("0");
          break;
        case "STATUS.FAILURE":
          dispatch(
            actions.modal.show("Error", operation?.error || "Unknown error")
          );
          setHash("0");
          break;
      }
    }
  }, [hash, operation?.status]);

  return (
    <>
      <h1>Swap</h1>
      <HBar>
        <RateTitle> Rate: {humanRate}</RateTitle>
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
      <VSpace height={15} />
      <Web3ButtonWrapper>
        <Button100W onClick={onSwap}>{swapButtonText}</Button100W>
      </Web3ButtonWrapper>
    </>
  );
}

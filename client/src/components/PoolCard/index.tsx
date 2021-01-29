import React, { useEffect } from "react";
import {
  RateTitle,
  HorizontalContainer,
  TransferCardContainer,
} from "./styles";
import { useAssets } from "../../store/wallet/hook";
import { DoubleIndicator } from "../DoubleIndicator";
import { usePool } from "../../store/pool/hook";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import { formatBN } from "../../utils/formatter";
import { LiquidityButtonBar } from "../LiquidityButtonBar";

export function PoolCard(): React.ReactElement {
  const dispatch = useDispatch();
  const ethAsset = useAssets("eth");
  const tokenAsset = useAssets("token");
  const { rate, tokenLiquidity, ethLiquidity, balance } = usePool();

  useEffect(() => {
    dispatch(actions.pool.updatePool());
  }, []);

  return (
    <TransferCardContainer>
      <HorizontalContainer>
        <RateTitle> Rate: {rate.toFixed(4)}</RateTitle>
      </HorizontalContainer>
      <DoubleIndicator
        leftTitle={ethAsset.name}
        leftValue={ethLiquidity}
        leftDecimals={ethAsset.decimals}
        rightTitle={tokenAsset.name}
        rightValue={tokenLiquidity}
        rightDecimals={tokenAsset.decimals}
      />
      <HorizontalContainer>
        <RateTitle> You own: {formatBN(balance)} liquidity tokens.</RateTitle>
      </HorizontalContainer>
      <LiquidityButtonBar />
    </TransferCardContainer>
  );
}

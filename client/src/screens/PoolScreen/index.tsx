import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import { useAssets } from "../../store/wallet/hook";
import { usePool } from "../../store/pool/hook";
import { TransferCardContainer } from "./styles";
import { DoubleIndicator } from "../../components/DoubleIndicator";
import { formatBN } from "../../utils/formatter";
import { LiquidityButtonBar } from "../../components/LiquidityButtonBar";
import { HBar, RateTitle } from "../../theme";

export function PoolScreen(): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.wallet.getBalance("eth"));
    dispatch(actions.wallet.getBalance("token"));
    dispatch(actions.pool.updatePool());
  }, []);

  const ethAsset = useAssets("eth");
  const tokenAsset = useAssets("token");
  const { rate, tokenLiquidity, ethLiquidity, balance } = usePool();

  return (
    <>
      <h1>Pool</h1>
      <TransferCardContainer>
        <HBar>
          <RateTitle> Rate: {rate.toFixed(4)}</RateTitle>
        </HBar>
        <DoubleIndicator
          leftTitle={ethAsset.name}
          leftValue={ethLiquidity}
          leftDecimals={ethAsset.decimals}
          rightTitle={tokenAsset.name}
          rightValue={tokenLiquidity}
          rightDecimals={tokenAsset.decimals}
        />
        <HBar>
          <RateTitle> You own: {formatBN(balance)} liquidity tokens.</RateTitle>
        </HBar>
        <LiquidityButtonBar />
      </TransferCardContainer>
    </>
  );
}

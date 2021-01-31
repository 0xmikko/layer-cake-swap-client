import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";
import { useAssets } from "../../store/wallet/hook";
import { usePool } from "../../store/pool/hook";
import { TransferCardContainer } from "./styles";
import { DoubleIndicator } from "../../components/DoubleIndicator";
import { formatBN } from "../../utils/formatter";
import { LiquidityButtonBar } from "../../components/LiquidityButtonBar";
import { HBar, RateTitle, VSpace } from "../../theme";
import { Web3ButtonWrapper } from "../../components/Buttons";
import { useSubstrate } from "../../store/substrate/hook";
import { useWeb3 } from "../../store/web3/hook";

export function PoolScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const [blockNumberTimer, setBlockNumberTimer] = useState(0);

  const { api } = useSubstrate();
  const { provider } = useWeb3();

  useEffect(() => {
    if (provider) dispatch(actions.token.getTokenInfo());
    if (api && provider) dispatch(actions.pool.updatePool());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, provider]);

  useEffect(() => {
    if (api && provider) dispatch(actions.pool.updatePool());
  }, [blockNumberTimer]);

  const timer = () => {
    setBlockNumberTimer((time) => time + 1);
  };

  useEffect(() => {
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, []);

  const ethAsset = useAssets("eth");
  const tokenAsset = useAssets("token");
  const { rate, tokenLiquidity, ethLiquidity, balance } = usePool();

  const humanRate = `${rate.toFixed(4)} ${tokenAsset.symbol} / ${
    ethAsset.symbol
  }`;

  return (
    <>
      <h1>Pool</h1>
      <TransferCardContainer>
        <HBar>
          <RateTitle> Rate: {humanRate}</RateTitle>
        </HBar>
        <DoubleIndicator
          leftTitle={ethAsset.name}
          leftValue={ethLiquidity}
          leftDecimals={ethAsset.decimals}
          rightTitle={tokenAsset.name}
          rightValue={tokenLiquidity}
          rightDecimals={tokenAsset.decimals}
        />
        <VSpace height={10} />
        <HBar>
          <RateTitle> You own: {formatBN(balance)} liquidity tokens.</RateTitle>
        </HBar>
        <VSpace height={10} />
        <Web3ButtonWrapper>
          <LiquidityButtonBar />
        </Web3ButtonWrapper>
      </TransferCardContainer>
    </>
  );
}

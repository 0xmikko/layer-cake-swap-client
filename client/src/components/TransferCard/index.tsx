import React from "react";
import {AssetTitle, HorizontalContainer, TransferCardContainer,} from "./styles";
import {DepositButtonBar} from "../DepositButtonBar";
import {AssetType} from "../../core/asset";
import {useAssets} from "../../store/wallet/hook";
import {DoubleIndicator} from "../DoubleIndicator";

export interface TransferCardProps {
  asset: AssetType;
  icon: string;
}

export function TransferCard({
  asset,
  icon,
}: TransferCardProps): React.ReactElement {
  const { name, decimals, mainBalance, l2Balance } = useAssets(asset);

  return (
    <TransferCardContainer>
      <HorizontalContainer>
        <img src={icon} height={"20px"} />
        <AssetTitle> {name}</AssetTitle>
      </HorizontalContainer>
      <DoubleIndicator
        leftTitle={"Wallet"}
        leftValue={mainBalance}
        leftDecimals={decimals}
        rightTitle={"Deposited"}
        rightValue={l2Balance}
        rightDecimals={decimals}
      />
      <DepositButtonBar asset={asset} />
    </TransferCardContainer>
  );
}

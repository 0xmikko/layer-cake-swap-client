import React from "react";
import { StyledCard } from "../SmartField/styles";
import {
  AssetTitle,
  HorizontalContainer,
  TransferCardContainer,
} from "./styles";
import { AmountIndicator } from "./AmountIndicator";
import { formatBN } from "../../utils/formatter";
import { DepositButtonBar } from "../DepositButtonBar";
import { ButtonBar } from "../DepositButtonBar/styles";
import { AssetType } from "../../core/asset";
import { useAssets } from "../../store/wallet/hook";

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
      <StyledCard>
        <ButtonBar>
          <AmountIndicator
            title={"Wallet"}
            amount={formatBN(mainBalance, decimals)}
          />
          <AmountIndicator
            title={"Deposited"}
            amount={formatBN(l2Balance, decimals)}
            align={"right"}
          />
        </ButtonBar>
      </StyledCard>
      <DepositButtonBar asset={asset} />
    </TransferCardContainer>
  );
}

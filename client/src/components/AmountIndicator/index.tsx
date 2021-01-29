import React from "react";
import {AmountITitle, AmountIValue, VerticalContainer} from "./styles";
import {BigNumberish} from "ethers";

export interface AmountIndicatorProps {
  title: string;
  amount: BigNumberish;
  align?: string;
}

export function AmountIndicator({
  title,
  amount,
  align,
}: AmountIndicatorProps): React.ReactElement {
  return (
    <VerticalContainer>
      <AmountITitle align={align || "left"}>{title}</AmountITitle>
      <AmountIValue align={align || "left"}>{amount}</AmountIValue>
    </VerticalContainer>
  );
}

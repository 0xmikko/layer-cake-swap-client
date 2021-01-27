import React from "react";
import { StyledCard, StyledPriceBlock } from "./styles";
import { BigNumberish } from "ethers";
import { Text } from "rebass";
import { parseUnits } from "ethers/lib/utils";

export interface SmartFieldProps {
  direction: "From" | "To";
  currency: "Token" | "Eth";
  amount: BigNumberish;
}

export function SmartField({
  direction,
  currency,
  amount,
}: SmartFieldProps): React.ReactElement {
  return (
    <>
      <Text marginBottom={"20px"}>{direction}</Text>
      <StyledCard>
        <StyledPriceBlock>
          <Text fontWeight={"bold"}>
            {parseUnits(amount.toString(), 0).toString()}
          </Text>
          <Text>{currency}</Text>
        </StyledPriceBlock>
      </StyledCard>
    </>
  );
}

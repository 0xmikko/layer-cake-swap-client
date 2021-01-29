import React from "react";
import {StyledCard} from "../SwapBar/styles";
import {DoubleBar,} from "./styles";
import {AmountIndicator} from "../AmountIndicator";
import {formatBN} from "../../utils/formatter";
import {BigNumberish} from "ethers";

export interface DoubleIndicatorProps {
  leftTitle: string,
    leftValue: BigNumberish,
    leftDecimals?: number,
    rightTitle: string,
    rightValue: BigNumberish
    rightDecimals?: number,
}

export function DoubleIndicator({
 leftTitle, leftValue, leftDecimals, rightTitle, rightValue, rightDecimals
}: DoubleIndicatorProps): React.ReactElement {

  return (
      <StyledCard>
        <DoubleBar>
          <AmountIndicator
            title={leftTitle}
            amount={formatBN(leftValue, leftDecimals)}
          />
          <AmountIndicator
            title={rightTitle}
            amount={formatBN(rightValue, rightDecimals)}
            align={"right"}
          />
        </DoubleBar>
      </StyledCard>
  );
}

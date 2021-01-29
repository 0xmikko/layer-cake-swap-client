import React from "react";
import {AmountITitle, VerticalContainer} from "./styles";
import {SmartNumberInput} from "../SmartNumberInput";

export interface AmountInputProps {
  title: string;
  amount?: number;
  setAmount?: (value: number) => void;
  disabled?: boolean;
}

export function AmountInput({
  title,
  amount,
  setAmount,
  disabled,
}: AmountInputProps): React.ReactElement {
  const defaultSet = (value: number) => {};
  return (
    <VerticalContainer>
      <AmountITitle align={"left"}>{title}</AmountITitle>
      <SmartNumberInput
        onChangeNum={setAmount || defaultSet}
        amount={amount}
        embedded={true}
        disabled={disabled}
      />
    </VerticalContainer>
  );
}

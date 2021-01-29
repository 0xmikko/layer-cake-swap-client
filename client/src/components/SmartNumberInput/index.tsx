import React, { useState } from "react";
import { EmbeddedSmartInput, SmartInput } from "./styles";
import { isPositiveFloat } from "../../utils/validate";

export interface SmartNumberInputProps {
  onChangeNum: (value: number) => void;
  amount?: number
  max?: number;
  embedded?: boolean;
  disabled?: boolean;
}

export function SmartNumberInput({
  onChangeNum,
    amount,
  max,
  embedded,
  disabled,
}: SmartNumberInputProps): React.ReactElement {
  const [value, setValue] = useState("0");
  const [overflow, setOverflow] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (!isPositiveFloat(newValue)) return;

    setValue(newValue);
    const valueFloat = parseFloat(newValue);
    onChangeNum(valueFloat);
    if (max) setOverflow(valueFloat > max);
  };

  return embedded ? (
    <EmbeddedSmartInput
      overflow={overflow}
      onChange={onChange}
      value={amount || value}
      disabled={disabled}
    />
  ) : (
    <SmartInput
      overflow={overflow}
      onChange={onChange}
      value={amount || value}
      disabled={disabled}
    />
  );
}

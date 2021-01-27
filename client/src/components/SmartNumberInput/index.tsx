import React, { useState } from "react";
import { SmartInput } from "./styles";
import { isPositiveFloat } from "../../utils/validate";

export interface SmartNumberInputProps {
  onChangeNum: (value: number) => void;
  max?: number;
}

export function SmartNumberInput({
  onChangeNum,
  max,
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

  return <SmartInput overflow={overflow} onChange={onChange} value={value} />;
}

import React from "react";
import {Dropdown} from "react-bootstrap";
import {DropItemS, StyledDropdownButton, StyledDropdownMenu,} from "./styles";
import {AssetType} from "../../core/asset";

export interface CurrencySelectorProps {
  selected: AssetType;
  onSelect: (assetTpe: AssetType) => void
}

export function CurrencySelector({ selected, onSelect
}: CurrencySelectorProps): React.ReactElement {

  return (
    <Dropdown
      onSelect={(key, e) => onSelect((key || "eth") as AssetType)}
      style={{ width: "50%" }}
    >
      <StyledDropdownButton>{selected || "Please select"}</StyledDropdownButton>
      <StyledDropdownMenu align="right">
        <DropItemS eventKey={"eth"}>ETH</DropItemS>
        <DropItemS eventKey={"token"}>Token</DropItemS>
      </StyledDropdownMenu>
    </Dropdown>
  );
}

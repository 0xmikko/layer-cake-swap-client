import React from "react";
import { Dropdown } from "react-bootstrap";
import { DropItemS, StyledDropdownButton, StyledDropdownMenu } from "./styles";
import { AssetType } from "../../core/asset";
import { useAssets } from "../../store/wallet/hook";
import { ICONS } from "../../config";

export interface CurrencySelectorProps {
  selected: AssetType;
  onSelect: (assetTpe: AssetType) => void;
}

export function CurrencySelector({
  selected,
  onSelect,
}: CurrencySelectorProps): React.ReactElement {
  const eth = useAssets("eth");
  const token = useAssets("token");

  const symbol = selected === "eth" ? eth.symbol : token.symbol;

  return (
    <Dropdown
      onSelect={(key, e) => onSelect((key || "eth") as AssetType)}
      style={{ width: "50%" }}
    >
      <StyledDropdownButton>
        <img
            src={ICONS[selected as AssetType]}
            height={"20px"}
            alt={symbol}
            style={{ marginRight: "10px", marginTop: "-4px" }}
        />

        {symbol || "Please select"}</StyledDropdownButton>
      <StyledDropdownMenu align="right">
        <DropItemS eventKey={"eth"}>
          <img
            src={ICONS["eth"]}
            height={"20px"}
            alt={eth.symbol}
            style={{ marginRight: "10px" }}
          />
          {eth.symbol}
        </DropItemS>
        <DropItemS eventKey={"token"}>
          <img
              src={ICONS["token"]}
              height={"20px"}
              alt={eth.symbol}
              style={{ marginRight: "10px" }}
          />

          {token.symbol}</DropItemS>
      </StyledDropdownMenu>
    </Dropdown>
  );
}

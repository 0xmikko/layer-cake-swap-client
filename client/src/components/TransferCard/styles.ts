import styled from "styled-components";
import { Button } from "react-bootstrap";

export const TransferCardContainer = styled.div``;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;

export const AssetTitle = styled.h3`
  font-size: 18px;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const AmountITitle = styled.h5<{ align?: string }>`
  text-align: ${(p) => p.align};
  font-size: 14px;
  font-weight: 700;
`;

export const AmountIValue = styled.h5<{ align?: string }>`
  text-align: ${(p) => p.align};
  font-size: 18px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

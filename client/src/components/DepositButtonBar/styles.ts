import styled from "styled-components";
import {Button} from "react-bootstrap";

export const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
`;

export const TransferButton = styled(Button)`
  background-color: #a31f43;
  min-width: 40%;
  border-color: #626473;
  border-radius: 10px;
`;

export const ProcessingButton = styled(TransferButton)`
  min-width: 100%;
`;

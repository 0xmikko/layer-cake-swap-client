import styled from "styled-components";
import {ButtonT} from "../../theme";

export const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
`;

export const TransferButton = styled(ButtonT)`
  min-width: 40%;
`;

export const ProcessingButton = styled(TransferButton)`
  min-width: 100%;
`;

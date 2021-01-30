import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { ButtonT } from "../Buttons/styles";

export const ModalS = styled(Modal)`

`;

export const ModalDialogS = styled(Modal.Dialog)`
 background-color: transparent;
`

export const ModalHeaderS = styled(Modal.Header)`
  border-radius: 20px 20px 0 0;
  background-color: #ab0240;
  text-align: center;
  font-weight: bold;
  justify-content: center;
`;

export const ModalBodyS = styled(Modal.Body)`
  background-color: #262627;
  border-radius:  0 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 180px;
`;

export const OkButton = styled(ButtonT)`
  width: 55%;
  margin-top: 12px;
  margin-bottom: 10px;
  min-width: 80px;
`;

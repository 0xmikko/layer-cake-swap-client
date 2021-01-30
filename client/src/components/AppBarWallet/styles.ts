import styled from "styled-components";
import { Button } from "react-bootstrap";

export const ConnectButtonS = styled(Button)`
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #252526;
  border-color: #333;
  
  :hover {
    background-color: #252526;
    border-color: #333;
  }
`;

export const ConnectButtonErrorS = styled(ConnectButtonS)`
  background-color: #ff0707;
  border-color: #333;

  :hover {
    background-color: #ff0707;
    border-color: #333;
  }
`

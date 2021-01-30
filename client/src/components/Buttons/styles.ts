import styled from "styled-components";
import {Button} from "react-bootstrap";

export const ButtonT = styled(Button)`
  background-color: #a31f43;
  border-color: #626473;
  border-radius: 10px !important;
  color: #fafafa !important;

  :hover,
  :focus {
    color: white !important;
    background-color: #a31f43 !important;
    //border-color: #626473;
    border-width: 0 !important;
    border-radius: 10px;
  }
`;

export const Button40W = styled(ButtonT)`
  min-width: 40%;
`;

export const Button100W = styled(ButtonT)`
  min-width: 100%;
`;

export const Web3ConnectButton = styled(Button)`
  min-width: 100%;
  background-color: #1d2448;
  border-color: #626473;
  border-radius: 10px !important;
  color: #ddd !important;

  :hover,
  :focus {
    color: white !important;
    background-color: #1d2448;
    border-color: #626473;
    border-radius: 10px;
  }
`;

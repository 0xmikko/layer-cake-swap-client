import styled from "styled-components";
import {Form} from "react-bootstrap";

export const SmartInput = styled(Form.Control)`
  background-color: #1e2022;
  color: white;
  border-color: ${({overflow}) =>
          overflow ? 'red' : 'grey'};;
  transition: 3s;
  width: 55%;
  border-radius: 10px;
  text-align: right;
  font-weight: bold;

  :focus {
    background-color: #35383c;
    color: white;
  }
`;

export const EmbeddedSmartInput = styled(Form.Control)`
  background-color: transparent;
  color: white;
  width: 55%;
  text-align: left;
  border-width: 0;
  font-weight: bold;
  
  :disabled, :focus {
    background-color: transparent;
    color: white;
    border-width: 0;
    outline: none!important;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  
  padding: 0;
`;

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

  :focus {
    background-color: #35383c;
    color: white;
  }
`;

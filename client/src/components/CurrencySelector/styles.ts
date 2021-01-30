import styled from "styled-components";
import {Dropdown} from "react-bootstrap";

export const StyledDropdownButton = styled(Dropdown.Toggle)`
  width: 100%;
  background-color: transparent!important;
  border-width: 0;
  
  :default{
    background-color: #a31f43;
  }

  :hover {
    background-color: #a31f43!important;
    outline: none!important;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  
  :focus {
    background-color: #a31f43;
    outline: none!important;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  :enabled {
    background-color: #a31f43;
  }
`

export const StyledDropdownMenu = styled(Dropdown.Menu)`
  width: 40%;
  background-color: #2b313c;
  border-color: white;

`

export const DropItemS = styled(Dropdown.Item)`
  color: white;
`

import styled from "styled-components";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledNavBar = styled(Navbar)`
  height: 70px;
  margin: 0;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #333;
  padding-bottom: 8px;
  //justify-content: space-between;
`;

export const NavBarLogo = styled.img`
  height: 25px;
`;

export const NavBarMenu = styled(Navbar)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavBarCenter = styled(Nav)`
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const NavBarRight = styled(Navbar)`
  padding: 0 15px;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
      display: none;
  }
`;

export const StyledNavLinkItem = styled(Nav.Link)`
  margin-left: 15px;
  margin-right: 15px;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: 500;

  :hover {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`;

export const StyledConnectButton = styled(Button)`
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

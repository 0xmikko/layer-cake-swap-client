/*
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppBarElement } from "./AppBarElement";
import logo from "../../assets/logo.png";
import {
  NavBarCenter,
  NavBarLogo,
  NavBarMenu,
  NavBarRight,
  StyledNavBar,
} from "./styles";
import { AppBarWallet } from "../AppBarWallet";

export function AppBar(): React.ReactElement {
  return (
    <StyledNavBar>
      <Navbar.Brand>
        <Link to="/">
          <NavBarLogo src={logo} alt={"Logo"} />
        </Link>
      </Navbar.Brand>

      <NavBarMenu>
        <NavBarCenter>
          <AppBarElement title="Swap" to="/" key="swap" />
          <AppBarElement title="Wallet" to="/wallet" key="wallet" />
          <AppBarElement title="Pool" to="/pool" key="pool" />
        </NavBarCenter>
        <NavBarRight>
          <AppBarWallet />
        </NavBarRight>
      </NavBarMenu>
    </StyledNavBar>
  );
}

import React from "react";
import { withTracker } from "../components/withTrackerHOC";
import {Redirect, Route, Switch} from "react-router";
import { SwapScreen } from "./SwapScreen";
import { WalletScreen } from "./WalletScreen";
import { AppBar } from "../components/AppBar";

export function Router(): React.ReactElement {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={withTracker(SwapScreen)} />
        <Route
          exact
          path="/wallet"
          component={withTracker(WalletScreen)}
        />
        <Redirect to={"/"} />
      </Switch>
    </>
  );
}

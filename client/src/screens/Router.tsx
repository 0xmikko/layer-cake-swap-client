import React from "react";
import {withTracker} from "../components/withTrackerHOC";
import {Redirect, Route, Switch} from "react-router";
import {SwapScreen} from "./SwapScreen";
import {WalletScreen} from "./WalletScreen";
import {AppBar} from "../components/AppBar";
import {PoolScreen} from "./PoolScreen";

export function Router(): React.ReactElement {
    return (
        <>
            <AppBar/>
            <Switch>
                <Route exact path="/" component={withTracker(SwapScreen)}/>
                <Route
                    exact
                    path="/wallet"
                    component={withTracker(WalletScreen)}
                />
                <Route
                    exact
                    path="/pool"
                    component={withTracker(PoolScreen)}
                />
                <Redirect to={"/"}/>
            </Switch>
        </>
    );
}

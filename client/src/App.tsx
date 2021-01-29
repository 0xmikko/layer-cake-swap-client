import React from "react";
import { Router } from "./screens/Router";
import { AppBar } from "./components/AppBar";
import { Footer } from "./components/Footer";
import { ContainerCentered, CardMainS } from "./theme";

export function App(): React.ReactElement {
  return (
    <>
      <AppBar />
      <ContainerCentered>
        <CardMainS>
          <Router />
        </CardMainS>
      </ContainerCentered>
      <Footer />
    </>
  );
}

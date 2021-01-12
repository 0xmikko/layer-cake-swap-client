import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
import { isMobile } from "react-device-detect";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store";
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";

const store = configureStore();

const GOOGLE_ANALYTICS_ID: string | undefined =
  process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
if (typeof GOOGLE_ANALYTICS_ID === "string") {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID);
  ReactGA.set({
    customBrowserType: !isMobile
      ? "desktop"
      : "web3" in window || "ethereum" in window
      ? "mobileWeb3"
      : "mobileRegular"
  });
} else {
  ReactGA.initialize("test", { testMode: true, debug: true });
}

window.addEventListener("error", error => {
  ReactGA.exception({
    description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
    fatal: true
  });
});

ReactDOM.render(
  <React.StrictMode>
    <FixedGlobalStyle />
    <Provider store={store}>
      <ThemeProvider>
        <ThemedGlobalStyle />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// ToDo: Add WebVitals
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {App, AppStatus, defaultApp} from "../../core/app";
import {ThunkAppAction} from "./index";

// Get user app from server
export const getApp = (): ThunkAppAction => async (dispatch) => {
  const appStr = localStorage.getItem("app");
  if (appStr === null) {
    await dispatch({
      type: "APP_SUCCESS",
      payload: defaultApp,
    });
    return;
  }
  await dispatch({
    type: "APP_SUCCESS",
    payload: JSON.parse(appStr),
  });
};

export const updateApp = (app: App): ThunkAppAction => async (dispatch) => {
  localStorage.setItem("app", JSON.stringify(app));
  dispatch({
    type: "APP_SUCCESS",
    payload: app,
  });
};

export const updateStatus = (status: AppStatus): ThunkAppAction => async (
  dispatch,
  getState
) => {
  const app = getState().app;
  app.status = status;
  dispatch(updateApp(app));
};

/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {App, AppStatus} from '../../core/app';
import {RootState} from "../index";
import {ThunkAction} from "redux-thunk";

export type AppActions =
  | {
      type: 'APP_REQUEST' | 'APP_SUCCESS' | 'APP_FAILURE';
      payload?: App;
      error?: boolean;
    }


export type ThunkAppAction = ThunkAction<
    void,
    RootState,
    unknown,
    AppActions
    >
export const appSelector = (state: RootState) => state.app;

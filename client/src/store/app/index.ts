/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {App, AppStatus} from '../../core/app';
import {RootState} from "../index";

export type AppActions =
  | {
      type: 'APP_REQUEST' | 'APP_SUCCESS' | 'APP_FAILURE';
      payload?: App;
      error?: boolean;
    }

export const appSelector = (state: RootState) => state.app;

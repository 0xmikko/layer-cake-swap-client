/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {App, defaultApp} from '../../core/app';
import {AppActions} from './';

export interface AppState extends App {}

const initialState: AppState = defaultApp;

export default function createReducer(
  state: AppState = initialState,
  action: AppActions,
): AppState {
  switch (action.type) {
    default:
    case 'APP_REQUEST':
      return state;
    case 'APP_SUCCESS':
      return action?.payload ? {...state, ...action.payload} : state;
  }

  return state;
}

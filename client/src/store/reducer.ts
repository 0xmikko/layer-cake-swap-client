/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { combineReducers } from "redux";
import app from './app/reducer'
import {operationReducer} from 'dlt-operations'

export default combineReducers({
  app,
  operations: operationReducer,
});

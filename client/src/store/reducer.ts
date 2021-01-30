/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { combineReducers } from "redux";
import app from "./app/reducer";
import modal from "./modal/reducer";
import token from "./token/reducer";
import substrate from "./substrate/reducer";
import pool from "./pool/reducer";
import web3 from "./web3/reducer";
import { operationReducer } from "dlt-operations";

// eslint-disable-next-line import/no-anonymous-default-export
export default combineReducers({
  operations: operationReducer,
  app,
  modal,
  token,
  substrate,
  pool,
  web3,
});

/*
 * Copyright (c) 2020. Mikael Lazarev
 */


import * as app from "./app/actions";
import * as wallet from "./wallet/actions";
import * as pool from "./pool/actions";
import * as token from "./token/actions";
import * as substrate from './substrate/actions'
import * as web3 from "./web3/actions";

export default {
  app,
  wallet,
  token,
  pool,
  substrate,
  web3,
};

/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {RootState} from "../index";
import {ThunkAction} from "redux-thunk";

export type ModalAction =
  | {
      type: "MODAL_SHOW";
      payload: {
        title: string;
        body: string;
      };
    }
  | {
      type: "MODAL_HIDE";
    };

export type ThunkAppAction = ThunkAction<void, RootState, unknown, ModalAction>;

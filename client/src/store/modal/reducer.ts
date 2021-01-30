/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { ModalAction } from "./";

export interface ModalState {
  show: boolean;
  title?: string;
  body?: string;
}

const initialState: ModalState = {
  show: false,
};

export default function createReducer(
  state: ModalState = initialState,
  action: ModalAction
): ModalState {
  switch (action.type) {
    case "MODAL_SHOW":
      return {
        show: true,
        ...action.payload,
      };
    case "MODAL_HIDE":
      return {
        ...state,
        show: false,
      };
  }

  return state;
}

/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { ModalAction } from "./index";

export const show = (title: string, body: string): ModalAction => ({
  type: "MODAL_SHOW",
  payload: { title, body },
});

export const hide = (): ModalAction => ({
  type: "MODAL_HIDE",
});

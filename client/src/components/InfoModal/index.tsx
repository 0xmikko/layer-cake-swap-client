import React from "react";
import {ModalBodyS, ModalDialogS, ModalHeaderS, ModalS, OkButton} from "./styles";
import {useModal} from "../../store/modal/hook";
import {useDispatch} from "react-redux";
import actions from "../../store/actions";
import "./modal.css";

export function InfoModal(): React.ReactElement {
  const dispatch = useDispatch();
  const { show, title, body } = useModal();

  const onHide = () => dispatch(actions.modal.hide());

  return (
    <ModalS dialogAs={ModalDialogS} show={show} onHide={onHide} centered>

      <ModalHeaderS>{title}</ModalHeaderS>
      <ModalBodyS>
        {body}
        <OkButton onClick={onHide}>Ok</OkButton>
      </ModalBodyS>
    </ModalS>
  );
}

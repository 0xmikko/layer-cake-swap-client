import {ModalState} from "./reducer";
import {useSelector} from "react-redux";
import {RootState} from "../index";

export function useModal() : ModalState {
    return useSelector((state:RootState) => state.modal)
}

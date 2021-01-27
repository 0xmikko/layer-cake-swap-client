import {useSelector} from "react-redux";
import {RootState} from "../index";
import {TokenState} from "./reducer";

export function useToken() : TokenState {
    return useSelector((state:RootState) => state.token);

}

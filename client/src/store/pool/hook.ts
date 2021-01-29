import {useSelector} from "react-redux";
import {RootState} from "../index";
import {Pool} from "../../core/pool";

export function usePool() : Pool {
    return useSelector((state:RootState) => state.pool);

}

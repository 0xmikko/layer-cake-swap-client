import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {Pool} from "../../core/pool";
import actions from "../actions";

export function usePool() : Pool {



    return useSelector((state:RootState) => state.pool);

}

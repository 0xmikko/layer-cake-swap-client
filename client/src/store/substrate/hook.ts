import {useSelector} from "react-redux";
import {RootState} from "../index";
import {SubstrateState} from "../../core/substrate";

export function useSubstrate() : SubstrateState {
    return useSelector((state:RootState) => state.substrate);

}

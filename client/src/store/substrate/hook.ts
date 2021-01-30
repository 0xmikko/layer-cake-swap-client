import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { SubstrateState } from "../../core/substrate";
import actions from "../actions";

export function useSubstrate(): SubstrateState {
  const dispatch = useDispatch();
  const substate = useSelector((state: RootState) => state.substrate);
  const { api } = substate;
  if (!api) {
    dispatch(actions.substrate.connect());
  }

  return substate;
}

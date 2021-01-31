import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { SubstrateState } from "../../core/substrate";
import actions from "../actions";
import { useEffect } from "react";

export function useSubstrate(): SubstrateState {
  const dispatch = useDispatch();
  const substate = useSelector((state: RootState) => state.substrate);
  const { api } = substate;
  useEffect(() => {
    if (!api) {
      dispatch(actions.substrate.connect());
    } else {
      dispatch(actions.substrate.getL2Balance("eth"));
      dispatch(actions.substrate.getL2Balance("token"));
      dispatch(actions.pool.updatePool());
    }
  }, [api]);

  return substate;
}

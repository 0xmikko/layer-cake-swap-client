import React, {useEffect} from "react";
import {ContainerCentered} from "../../theme";
import {StyledSwapCard} from "../../components/SwapBar/styles";
import {TransferCard} from "../../components/TransferCard";
import {useDispatch} from "react-redux";
import actions from "../../store/actions";
import {etherIcon, tokenIcon} from "../../assets/icons";
import {PoolCard} from "../../components/PoolCard";

export function PoolScreen(): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.wallet.getBalance("eth"));
    dispatch(actions.wallet.getBalance("token"));
  }, []);

  return (
    <ContainerCentered>
      <StyledSwapCard>
        <h1>Pool</h1>
        <PoolCard />
        <div style={{ marginTop: "20px" }} />
      </StyledSwapCard>
    </ContainerCentered>
  );
}

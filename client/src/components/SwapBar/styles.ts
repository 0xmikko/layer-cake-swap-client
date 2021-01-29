import styled from "styled-components";
import { Card } from "rebass";
import { ButtonT } from "../../theme";

export const StyledCard = styled(Card)`
  border-radius: 20px;
  border: 1px solid white;
  padding: 20px 30px 12px 30px;
`;

export const InputBlockS = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
`;

export const StyledSwapCard = styled(Card)`
  //min-height: 500px;
  min-width: 400px!important;
  border-radius: 40px;
  background-color: #292c3f;
  padding: 30px 20px 40px 20px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    margin: 0;
    border-radius: 0px;
  }
`;

export const SwapButtonS = styled(ButtonT)`
  width: 100%;
  margin-top: 20px !important;
`;

export const DarrContainerS = styled.div`
  width: 100%;
  padding: 7px;
  text-align: center;
`;

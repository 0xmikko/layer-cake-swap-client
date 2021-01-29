import styled from "styled-components";


export const AmountITitle = styled.h5<{ align?: string }>`
  text-align: ${(p) => p.align};
  font-size: 14px;
  font-weight: 700;
`;

export const AmountIValue = styled.h5<{ align?: string }>`
  text-align: ${(p) => p.align};
  font-size: 18px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

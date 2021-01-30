import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  color: white;
  @media only screen and (max-width: 600px) {
    background-color: #292c3f !important;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
`;

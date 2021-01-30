import React, { HTMLProps, useCallback } from "react";
import ReactGA from "react-ga";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Card } from "rebass";

export const ContainerCentered = styled(Container)`
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    padding: 40px 0 0 0;
    background-color: #292c3f !important;
  }
`;

export const InfoScreen = styled(Container)`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  padding: 0 !important;

  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;

// An internal link from the react-router-dom library that is correctly styled
export const StyledInternalLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`;
/**
 * Outbound link that handles firing google analytics events
 */
export function ExternalLink({
  target = "_blank",
  href,
  rel = "noopener noreferrer",
  ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, "as" | "ref" | "onClick"> & {
  href: string;
}) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      // don't prevent default, don't redirect if it's a new tab
      if (target === "_blank" || event.ctrlKey || event.metaKey) {
        ReactGA.outboundLink({ label: href }, () => {
          console.debug("Fired outbound link event", href);
        });
      } else {
        event.preventDefault();
        // send a ReactGA event and then trigger a location change
        ReactGA.outboundLink({ label: href }, () => {
          window.location.href = href;
        });
      }
    },
    [href, target]
  );
  return (
    <StyledLink
      target={target}
      rel={rel}
      href={href}
      onClick={handleClick}
      {...rest}
    />
  );
}


export const StyledCard = styled(Card)`
  border-radius: 20px;
  border: 1px solid white;
  padding: 20px 30px 12px 30px;
`;

export const CardMainS = styled(Card)`
  //min-height: 500px;
  min-width: 400px !important;
  border-radius: 40px;
  background-color: #292c3f;
  padding: 30px 20px 40px 20px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    margin: 0;
    border-radius: 0px;
  }
`;

export const HBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  text-align: center;
`;

export const RateTitle = styled.h3`
  width: 100%;
  font-size: 18px;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const VSpace = styled.div`
  margin-top: ${({ height }: { height: number }) => height}px;
`;

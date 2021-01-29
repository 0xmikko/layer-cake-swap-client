import React, { HTMLProps, useCallback } from "react";
import ReactGA from "react-ga";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Button} from "rebass";

export const ContainerCentered = styled(Container)`
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    padding: 40px 0 0 0;
    background-color: #292c3f!important;
  }
`

export const InfoScreen = styled(Container)`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  padding: 0 !important;

  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column
`

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

export const ButtonT = styled(Button)`
  background-color: #a31f43;
  border-color: #626473;
  border-radius: 10px!important;
  color: #fafafa!important;
  
  :hover, :focus {
    color: white!important;
    background-color: #a31f43!important;
    border-color: #626473;
    border-radius: 10px;
  }
`

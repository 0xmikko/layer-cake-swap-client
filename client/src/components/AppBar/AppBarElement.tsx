/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from 'react';
import {StyledNavLink, StyledNavLinkItem} from './components';

interface AppBarElementProps {
  title: string;
  to: string;
}

export const AppBarElement: React.FC<AppBarElementProps> = ({
  title,
  to,
}: AppBarElementProps) => {
  return (
    <StyledNavLinkItem>
      <StyledNavLink to={to}>
       {title}
      </StyledNavLink>
    </StyledNavLinkItem>
  );
};

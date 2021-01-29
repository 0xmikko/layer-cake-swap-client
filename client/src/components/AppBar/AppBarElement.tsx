/*
 *
 */

import React from 'react';
import {StyledNavLink, StyledNavLinkItem} from './styles';

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

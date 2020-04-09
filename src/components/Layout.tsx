import React from 'react';
import { jsx, css } from '@emotion/core';
import { mainDark } from '../colors';
/**@jsx jsx */

type LayoutProps = {
  children: React.ReactChild;
};

function Layout({ children }: LayoutProps) {
  return (
    <div
      css={css`
        background-color: ${mainDark};
        width: 100%;
        height: 100%;
      `}
    >
      {children}
    </div>
  );
}

export default Layout;

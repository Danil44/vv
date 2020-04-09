import React from 'react';
import { jsx, css } from '@emotion/core';
/**@jsx jsx */

type HomeInnerLayoutProps = {
  children: React.ReactChild[] | React.ReactChild;
};

export default function HomeInnerLayout({ children }: HomeInnerLayoutProps) {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {children}
    </div>
  );
}

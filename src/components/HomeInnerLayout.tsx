import React from 'react';
import { jsx, css } from '@emotion/core';
/**@jsx jsx */

type HomeInnerLayoutProps = {
  children: React.ReactChild[] | React.ReactChild;
  shift: boolean;
};

export default function HomeInnerLayout({
  children,
  shift = false,
}: HomeInnerLayoutProps) {
  return (
    <div
      css={css`
        display: flex;
        transform: translateX(${shift ? '-70%' : '0'});
      `}
    >
      {children}
    </div>
  );
}

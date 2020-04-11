import React from 'react';
import { jsx, css } from '@emotion/core';
/**@jsx jsx */

type HeaderProps = {
  shift: boolean;
};

export default function Header({ shift }: HeaderProps) {
  return (
    <header
      css={css`
        padding: 5.188em 5.625em;
        transform: translateX(${shift ? '-70%' : 0});
      `}
    >
      <h2
        css={css`
          color: #fff;
          border-bottom: 1px solid #fff;
          display: inline;
          font-size: 1.25em;
        `}
      >
        FILMER
      </h2>
    </header>
  );
}

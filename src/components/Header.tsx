import React from 'react';
import { jsx, css } from '@emotion/core';
/**@jsx jsx */

export default function Header() {
  return (
    <header
      css={css`
        padding: 5.188em 5.625em;
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

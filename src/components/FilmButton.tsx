import React from 'react';
import { jsx, css } from '@emotion/core';
import { mainOrange } from '../colors';
/**@jsx jsx */

type FilmButtonProps = {
  children: React.ReactChild;
  className?: string;
  active?: boolean;
};

export default function FilmButton({
  active = false,
  children,
  className,
}: FilmButtonProps) {
  return (
    <button
      className={className}
      css={css`
        color: #fff;
        font-size: 1em;
        text-transform: uppercase;
        border-radius: 5px;
        padding: 22px 0;
        background-color: ${active ? mainOrange : 'transparent'};
        border: none;
        width: calc(33.33% - 5px);

        &:hover {
          background-color: ${mainOrange};
        }
      `}
    >
      {children}
    </button>
  );
}

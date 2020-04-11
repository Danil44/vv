import React from 'react';
import { jsx, css } from '@emotion/core';
import { whiteGrey } from '../colors';
/**@jsx jsx */

type FilmDescriptionProps = {
  descirption: string;
};

export default function FilmDescription({ descirption }: FilmDescriptionProps) {
  return (
    <p
      css={css`
        color: ${whiteGrey};
        font-size: 1em;
        line-height: 20px;
        flex: 1 1;
      `}
    >
      {descirption}
    </p>
  );
}

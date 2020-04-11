import React from 'react';
import FilmButton from './FilmButton';
import { jsx, css } from '@emotion/core';
/**@jsx jsx */

type FilmButtonsListProps = {
  activeButtonIndex: number;
};

export default function FilmButtonsList({
  activeButtonIndex,
}: FilmButtonsListProps) {
  return (
    <ul
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <FilmButton active={activeButtonIndex === 0}>Play</FilmButton>
      <FilmButton active={activeButtonIndex === 1}>Trailer</FilmButton>
      <FilmButton active={activeButtonIndex === 2}>To saved</FilmButton>
    </ul>
  );
}

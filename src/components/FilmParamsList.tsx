import React from 'react';
import FilmParamsItem from './FilmParamsItem';
import { jsx, css } from '@emotion/core';
/** @jsx jsx */

type FilmParamsListProps = {
  popularity: number;
  vote_count: number;
  language: string;
};

export default function FilmParamsList({
  popularity,
  vote_count,
  language,
}: FilmParamsListProps) {
  return (
    <ul
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <FilmParamsItem name="Popularity" value={popularity} />
      <FilmParamsItem name="Vote count" value={vote_count} />
      <FilmParamsItem name="Language" value={language} />
    </ul>
  );
}

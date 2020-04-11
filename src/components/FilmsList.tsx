import React from 'react';
import FilmsListItem from './FilmsListItem';
import { jsx, css } from '@emotion/core';
import FilmProps from '../types/Film';
/**@jsx jsx */

type FilmsListProps = {
  films: FilmProps[];
  activeIndex: number | null;
};

export default function FilmsList({ films, activeIndex }: FilmsListProps) {
  return (
    <div
      css={css`
        overflow: hidden;
        height: 100%;
        padding-right: 12px;
      `}
    >
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 90%;
          overflow: auto;
          padding: 12px;
          padding-right: 20px;
        `}
      >
        {films.map((film, index) => (
          <FilmsListItem
            key={film.id}
            name={film.original_title}
            imageSrc={film.poster_path}
            active={activeIndex === index}
          />
        ))}
      </ul>
    </div>
  );
}

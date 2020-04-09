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
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        height: 70vh;
        padding: 12px;
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
  );
}

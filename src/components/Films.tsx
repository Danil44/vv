import React from 'react';
import FilmsList from './FilmsList';
import { jsx, css } from '@emotion/core';
import FilmProps from '../types/Film';
import ControlledLayout from './ControlledLayout';
import useKeyboardWalking from '../hooks/useKeyboardWalking/useKeyboardWalking';
/**@jsx jsx */

type FilmsProps = {
  films: FilmProps[];
  controlled: boolean;
  onFilmSubmit: (filmId: number) => void;
};

export default function Films({ films, controlled, onFilmSubmit }: FilmsProps) {
  const { cursorPositionIndex, onKeyDown } = useKeyboardWalking({
    itemsLength: films.length,
    walkType: 'grid',
    goBy: 5,
  });

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    onFilmSubmit(films[cursorPositionIndex].id);
  };

  return (
    <div
      css={css`
        flex: 3 1;
        padding-right: 5.625em;
      `}
    >
      <ControlledLayout
        autoFocus={true}
        controlled={controlled}
        onSubmit={handleSubmit}
        onKeyDown={onKeyDown}
      >
        <FilmsList
          activeIndex={controlled ? cursorPositionIndex : null}
          films={films}
        />
      </ControlledLayout>
    </div>
  );
}

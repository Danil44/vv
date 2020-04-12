import React, { useRef, useEffect } from 'react';
import GenresMenuList from '../GenresMenuList';
import { jsx, css } from '@emotion/core';
import useKeyboardWalking from '../../hooks/useKeyboardWalking/useKeyboardWalking';
import ControlledLayout from '../ControlledLayout';
/**@jsx jsx */

type GenresMenuProps = {
  genres: string[];
  onGenreChange: (currentGenre: string) => void;
  onGenreSubmit: React.FormEventHandler<HTMLFormElement>;
  /**If true - than user will be able to control current genre through an up and down keys */
  controlled: boolean;
};

export default function GenresMenu({
  genres,
  onGenreChange,
  onGenreSubmit,
  controlled,
}: GenresMenuProps) {
  const { cursorPositionIndex, onKeyDown } = useKeyboardWalking({
    itemsLength: genres.length,
  });

  useEffect(() => {
    onGenreChange(genres[cursorPositionIndex]);
  }, [cursorPositionIndex, onGenreChange, genres]);

  return (
    <div
      css={css`
        padding: 0 6.9em 0 4.5em;
        flex: 1 1;
        position: relative;
      `}
    >
      <ControlledLayout
        autoFocus={true}
        controlled={controlled}
        onSubmit={onGenreSubmit}
        onKeyDown={onKeyDown}
      >
        <GenresMenuList genres={genres} activeIndex={cursorPositionIndex} />
      </ControlledLayout>
    </div>
  );
}

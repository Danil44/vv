import React, { useState, useEffect } from 'react';

export const KEY_UP = 38;
export const KEY_DOWN = 40;
export const KEY_RIGHT = 39;
export const KEY_LEFT = 37;
export const KEY_B = 66;

export default function useKeyboardWalking({
  itemsLength,
  walkType = 'column',
  goBy = 1,
}: {
  walkType?: 'column' | 'row' | 'grid';
  goBy?: number;
  itemsLength: number;
}) {
  const [cursorPositionIndex, setCursorPositionIndex] = useState(0);

  const walkColumn = (keyCode: number) => {
    if (keyCode === KEY_UP && cursorPositionIndex > 0) {
      setCursorPositionIndex(cursorPositionIndex - goBy);
    }
    if (keyCode === KEY_DOWN && cursorPositionIndex < itemsLength - 1) {
      setCursorPositionIndex(cursorPositionIndex + goBy);
    }
  };

  const walkRow = (keyCode: number) => {
    if (keyCode === KEY_RIGHT && cursorPositionIndex < itemsLength - 1) {
      setCursorPositionIndex(cursorPositionIndex + goBy);
    }
    if (keyCode === KEY_LEFT && cursorPositionIndex > 0) {
      setCursorPositionIndex(cursorPositionIndex - goBy);
    }
  };

  const walkGrid = (keyCode: number) => {
    if (keyCode === KEY_RIGHT && cursorPositionIndex < itemsLength - 1) {
      setCursorPositionIndex(cursorPositionIndex + 1);
    }
    if (keyCode === KEY_LEFT && cursorPositionIndex > 0) {
      setCursorPositionIndex(cursorPositionIndex - 1);
    }
    if (keyCode === KEY_DOWN && cursorPositionIndex + goBy <= itemsLength - 1) {
      setCursorPositionIndex(cursorPositionIndex + goBy);
    }
    if (keyCode === KEY_UP && cursorPositionIndex - goBy >= 0) {
      setCursorPositionIndex(cursorPositionIndex - goBy);
    }
  };

  const keyDown: React.KeyboardEventHandler<HTMLInputElement> = ({
    keyCode,
  }) => {
    if (walkType === 'column') {
      walkColumn(keyCode);
    }
    if (walkType === 'row') {
      walkRow(keyCode);
    }
    if (walkType === 'grid') {
      walkGrid(keyCode);
    }
  };

  return { cursorPositionIndex, onKeyDown: keyDown, setCursorPositionIndex };
}

import { useState } from 'react';

export default function useKeyboardWalking({
  itemsLength,
  walkType = 'column',
}: {
  walkType?: 'column' | 'grid';
  itemsLength: number;
}) {
  const [cursorPositionIndex, setCursorPositionIndex] = useState(0);

  const walkColumn = (keyCode: number) => {
    if (keyCode === 38 && cursorPositionIndex > 0) {
      setCursorPositionIndex(cursorPositionIndex - 1);
    }
    if (keyCode === 40 && cursorPositionIndex < itemsLength - 1) {
      setCursorPositionIndex(cursorPositionIndex + 1);
    }
  };

  const walkGrid = (keyCode: number) => {
    if (keyCode === 39 && cursorPositionIndex < itemsLength - 1) {
      setCursorPositionIndex(cursorPositionIndex + 1);
    }
    if (keyCode === 37 && cursorPositionIndex > 0) {
      setCursorPositionIndex(cursorPositionIndex - 1);
    }
    if (keyCode === 40 && cursorPositionIndex + 5 <= itemsLength - 1) {
      setCursorPositionIndex(cursorPositionIndex + 5);
    }
    if (keyCode === 38 && cursorPositionIndex - 5 >= 0) {
      setCursorPositionIndex(cursorPositionIndex - 5);
    }
  };

  const keyDown: React.KeyboardEventHandler<HTMLInputElement> = ({
    keyCode,
  }) => {
    if (walkType === 'column') {
      walkColumn(keyCode);
    } else {
      console.log(keyCode);
      walkGrid(keyCode);
    }
  };

  return { cursorPositionIndex, onKeyDown: keyDown };
}

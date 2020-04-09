import React from 'react';
import { jsx, css } from '@emotion/core';
import { lightGrey, mainOrange } from '../colors';
/**@jsx jsx */

type FilmsListItemProps = {
  imageSrc?: string;
  name: string;
  active?: boolean;
};

export default function FilmsListItem({
  imageSrc,
  name,
  active = false,
}: FilmsListItemProps) {
  return (
    <li
      css={css`
        width: calc(20% - 12px);
        height: 250px;
        margin-bottom: 10px;
        border: 2px solid ${active ? mainOrange : 'transparent'};
        transform: ${active ? 'scale(1.03)' : 'scale(1)'};

        &:not(:nth-child(5n + 5)) {
          margin-right: 10px;
        }
      `}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          alt={`${name}'s poster`}
        />
      )}
    </li>
  );
}

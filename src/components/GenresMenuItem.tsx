import React from 'react';
import { jsx, css } from '@emotion/core';
import { lightGrey, mainOrange } from '../colors';
import { ReactComponent as RightArrowIcon } from '../images/right-arrow.svg';
/**@jsx jsx */

type GenresMenuItemProps = {
  active?: boolean;
  name: string;
};

export default function GenresMenuItem({
  active = false,
  name,
}: GenresMenuItemProps) {
  return (
    <li
      css={css`
        color: ${active ? '#fff' : lightGrey};
        padding: 1em 0 1em 0.938em;
        border: 2px solid ${active ? mainOrange : 'transparent'};
        border-radius: 6px;
        font-size: 1em;
        display: flex;
        align-items: center;
      `}
    >
      <span
        css={css`
          margin-right: 5px;
          text-transform: capitalize;
        `}
      >
        {name}
      </span>
      {active && <RightArrowIcon width="10px" height="10px" />}
    </li>
  );
}

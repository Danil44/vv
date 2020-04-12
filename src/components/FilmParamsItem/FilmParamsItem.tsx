import React from 'react';
import styled from 'styled-components';
import { css as styledCss } from 'styled-components';
import { lightGrey } from '../../colors';
import { jsx, css } from '@emotion/core';
/**@jsx jsx */

const baseSpan = styledCss`
  font-size: 1em;
  font-weight: 400;
  display:block;
`;

const OptionName = styled.span`
  ${baseSpan};
  color: ${lightGrey};
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 10px;
`;

const OptionValue = styled.span`
  ${baseSpan}
  color:#fff;
`;

type FilmParamsItemProps = {
  name: string;
  value: string | number;
};

export default function FilmParamsItem({ name, value }: FilmParamsItemProps) {
  return (
    <li
      css={css`
        width: calc(33.33% - 5px);
        border-top: 2px solid;
        padding-top: 10px;
      `}
    >
      <OptionName data-testid="option-name">{name}</OptionName>
      <OptionValue data-testid="option-value">{value}</OptionValue>
    </li>
  );
}

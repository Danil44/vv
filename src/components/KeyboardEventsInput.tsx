import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { css, jsx } from '@emotion/core';
/**@jsx jsx */

const KeyboardEventsInput = React.forwardRef(
  (
    props: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ref,
  ) => (
    <input
      {...props}
      ref={ref as null}
      css={css`
        position: absolute;
        height: 0;
        width: 0;
        background-color: transparent;
        border: 0;
      `}
    />
  ),
);

export default KeyboardEventsInput;

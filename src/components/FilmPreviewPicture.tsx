import React from 'react';
import { jsx, css } from '@emotion/core';
/**@jsx jsx */

type FilmPreviewPictureProps = {
  imageSrc: string;
  name: string;
};

export default function FilmPreviewPicture({
  imageSrc,
  name,
}: FilmPreviewPictureProps) {
  return (
    <div
      css={css`
        height: 60%;
      `}
    >
      <img
        src={imageSrc}
        alt={`${name}'s poster`}
        css={css`
          height: 100%;
          object-fit: cover;
          width: 100%;
        `}
      />
    </div>
  );
}

import React, { useEffect, KeyboardEvent } from 'react';
import { jsx, css } from '@emotion/core';
import styled from 'styled-components';
import FilmParamsList from './FilmParamsList';
import FilmDescription from './FilmDescription';
import FilmButtonsList from './FilmButtonsList';
import FilmProps from '../types/Film';
import FilmPreviewPicture from './FilmPreviewPicture';
import useKeyboardWalking from '../hooks/useKeyboardWalking';
/**@jsx jsx */

const Title = styled.h2`
  color: #fff;
  font-size: 1.8em;
  margin-bottom: 20px;
`;

export default function FilmView(props: FilmProps) {
  const { cursorPositionIndex, onKeyDown } = useKeyboardWalking({
    itemsLength: 3,
    walkType: 'row',
  });

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown as any);
    return () => {
      window.removeEventListener('keydown', onKeyDown as any);
    };
  }, [onKeyDown]);

  return (
    <section
      css={css`
        width: 70%;
        height: 80%;
        position: absolute;
        top: 10%;
        right: 5%;
      `}
    >
      <Title>{props.title}</Title>
      <div
        css={css`
          display: flex;
          height: 100%;
        `}
      >
        <div
          css={css`
            flex: 2 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 15px;
          `}
        >
          <FilmParamsList
            popularity={props.popularity}
            vote_count={props.vote_count}
            language={props.original_language}
          />
          <FilmPreviewPicture imageSrc={props.poster_path} name={props.title} />
          <FilmButtonsList activeButtonIndex={cursorPositionIndex} />
        </div>
        <FilmDescription descirption={props.overview} />
      </div>
    </section>
  );
}

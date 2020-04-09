import React from 'react';
import GenresMenuItem from './GenresMenuItem';

type GenresMenuListProps = {
  genres: string[];
  activeIndex: number;
};

export default function GenresMenuList({
  genres,
  activeIndex,
}: GenresMenuListProps) {
  return (
    <ul>
      {genres.map((genre, index) => (
        <GenresMenuItem
          active={activeIndex === index}
          key={genre}
          name={genre}
        />
      ))}
    </ul>
  );
}

import React, { Fragment, useState, useEffect, KeyboardEvent } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeInnerLayout from '../components/HomeInnerLayout';
import GenresMenu from '../components/GenresMenu';
import Films from '../components/Films';
import Filmer from '../models/Filmer';
import FilmProps from '../types/Film';

function Home() {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [films, setFilms] = useState<FilmProps[]>([]);
  const [filmsByGenre, setFilmsByGenre] = useState<FilmProps[]>([]);
  const [currentControlledView, setCurrentControlledView] = useState<
    'menu' | 'films'
  >('menu');

  useEffect(() => {
    Filmer.films.then(films => {
      setFilms(films.data.results);

      const genres = Filmer.getGenres(films.data.results);
      setGenres(genres);
      setSelectedGenre(genres[0]);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown as any);

    return () => window.removeEventListener('keydown', handleKeyDown as any);
  }, [currentControlledView]);

  useEffect(() => {
    setFilmsByGenre(Filmer.getFilmsByGenre(selectedGenre, films));
  }, [selectedGenre]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 66) {
      if (currentControlledView === 'menu') return;

      setCurrentControlledView('menu');
    }
  };

  const handleGenreChange = (selectedGenre: string) => {
    setSelectedGenre(selectedGenre);
  };

  const handleGenreSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setCurrentControlledView('films');
  };

  return (
    <Layout>
      <Fragment>
        <Header />
        <HomeInnerLayout>
          {genres.length && (
            <GenresMenu
              onGenreSubmit={handleGenreSubmit}
              onGenreChange={handleGenreChange}
              genres={genres}
              controlled={currentControlledView === 'menu'}
            />
          )}
          <Films
            controlled={currentControlledView === 'films'}
            onFilmSubmit={() => {}}
            films={filmsByGenre}
          />
        </HomeInnerLayout>
      </Fragment>
    </Layout>
  );
}

export default Home;

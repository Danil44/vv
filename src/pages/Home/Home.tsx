import React, { Fragment, useState, useEffect, KeyboardEvent } from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header/Header';
import HomeInnerLayout from '../../components/HomeInnerLayout';
import GenresMenu from '../../components/GenresMenu/GenresMenu';
import Films from '../../components/Films';
import Filmer from '../../models/Filmer';
import FilmProps from '../../types/Film';
import FilmView from '../../components/FilmView';
import { useRouteMatch, useHistory } from 'react-router';
import { KEY_B } from '../../hooks/useKeyboardWalking/useKeyboardWalking';

function Home() {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedFilm, setSelectedFilm] = useState<FilmProps | null>(null);
  const [films, setFilms] = useState<FilmProps[]>([]);
  const [filmsByGenre, setFilmsByGenre] = useState<FilmProps[]>([]);
  const [currentControlledView, setCurrentControlledView] = useState<
    'menu' | 'films'
  >('menu');
  const { params } = useRouteMatch<{ filmId: string }>();
  const history = useHistory();

  const setFilm = (filmId: number) => {
    const selectedFilm = Filmer.getFilmById(films, filmId);

    if (!selectedFilm) return;

    setSelectedFilm(selectedFilm);
  };

  useEffect(() => {
    Filmer.films.then(films => {
      setFilms(films.data.results);

      const genres = Filmer.getGenres(films.data.results);
      setGenres(genres);
      setSelectedGenre(genres[0]);
    });
  }, []);

  useEffect(() => {
    if (params.filmId) {
      setFilm(+params.filmId);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === KEY_B) {
        if (params.filmId) {
          history.push('/');
          setSelectedFilm(null);
          return setCurrentControlledView('films');
        }

        if (currentControlledView === 'menu') return;

        setCurrentControlledView('menu');
      }
    };

    window.addEventListener('keydown', handleKeyDown as any);

    return () => window.removeEventListener('keydown', handleKeyDown as any);
  }, [currentControlledView, params.filmId, setFilm]);

  useEffect(() => {
    setFilmsByGenre(Filmer.getFilmsByGenre(selectedGenre, films));
  }, [selectedGenre, films]);

  const handleGenreChange = (selectedGenre: string) => {
    setSelectedGenre(selectedGenre);
  };

  const handleGenreSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setCurrentControlledView('films');
  };

  const handleFilmSubmit = (filmId: number) => {
    history.push(`/${filmId}`);
    setFilm(filmId);
  };

  return (
    <Layout>
      <Fragment>
        <Header shift={Boolean(selectedFilm)} />
        <HomeInnerLayout shift={Boolean(selectedFilm)}>
          {genres.length && (
            <GenresMenu
              onGenreSubmit={handleGenreSubmit}
              onGenreChange={handleGenreChange}
              genres={genres}
              controlled={currentControlledView === 'menu' && !params.filmId}
            />
          )}
          <Films
            controlled={currentControlledView === 'films' && !params.filmId}
            onFilmSubmit={handleFilmSubmit}
            films={filmsByGenre}
          />
        </HomeInnerLayout>
        {selectedFilm ? <FilmView {...selectedFilm} /> : ''}
      </Fragment>
    </Layout>
  );
}

export default Home;

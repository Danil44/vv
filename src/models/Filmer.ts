import FilmProps from '../types/Film';
import Axios from 'axios';

const cachedFilmsByGenre: { [key: string]: FilmProps[] } = {};

export default class Filmer {
  static getGenres(films: FilmProps[]): string[] {
    return films
      .flatMap(item => item.genre_ids)
      .filter((genre, index, genres) => genres.indexOf(genre) === index);
  }

  static getFilmsByGenre(genre: string, films: FilmProps[]): FilmProps[] {
    if (cachedFilmsByGenre[genre]) return cachedFilmsByGenre[genre];

    cachedFilmsByGenre[genre] = films.filter(film =>
      film.genre_ids.includes(genre),
    );

    return cachedFilmsByGenre[genre];
  }

  static get films(): Promise<{ data: { results: FilmProps[] } }> {
    return Axios.get(
      'https://raw.githubusercontent.com/roman-curse/videoJson/master/videoJson.json',
    );
  }
  //   static getByCategory(category: string): [] {}
}

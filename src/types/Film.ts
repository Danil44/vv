type FilmProps = {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  original_language: string;
  original_title: string;
  genre_ids: string[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
};

export default FilmProps;

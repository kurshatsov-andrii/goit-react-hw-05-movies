import default_image from 'images/default_image.png';
import { Link, useLocation } from 'react-router-dom';
import { InfoBox, MovieItemStyled, MovieTitle } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const location = useLocation();

  function titleSlice(title) {
    if (title.length < maxLength) return title;
    return title.slice(0, maxLength) + '...';
  }

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';
  const { id, title, poster_path, name } = movie || {};
  const imageSrc = poster_path ? IMAGE_URL + poster_path : default_image;
  const maxLength = 16;
  const titleMovie = title || name;

  return (
    <MovieItemStyled title={title}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={imageSrc} alt={title} width={200} />
        <InfoBox>
          <MovieTitle>{titleSlice(titleMovie)}</MovieTitle>
        </InfoBox>
      </Link>
    </MovieItemStyled>
  );
};

export default MovieItem;

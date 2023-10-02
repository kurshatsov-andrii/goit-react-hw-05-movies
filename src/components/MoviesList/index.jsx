import { Container} from 'components/App.styled';
import MovieItem from 'components/MovieItem';
import { MoviesListStyled } from './MoviesList.styled';

const MoviesList = ({ moviesList }) => {
  return (
        <Container>      
    <MoviesListStyled className="galleryWrapp">
      {moviesList.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      </MoviesListStyled>
    </Container>
  );
};

export default MoviesList;
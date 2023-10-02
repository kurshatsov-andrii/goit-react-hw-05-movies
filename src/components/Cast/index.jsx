import { Container } from 'components/App.styled';
import CastList from 'components/CastList';
import ErrorMessage from 'components/ErrorMessage';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsCast } from 'api/apiMovies';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async movieId => {
      try {
        setIsLoading(true);
        setIsError('');
        const movieCast = await getDetailsCast(movieId);
        setCast(movieCast);        
      } catch ({ message }) {
        setIsError(message);
      } finally {
        setIsLoading(false);
      }      
    }    
    fetchCast(movieId);
 }, [movieId]);


  return (
    <Container>
      {isLoading && <Loader />}
      {isError && !isLoading && <ErrorMessage error={isError} />}
      {cast && <CastList cast={cast} />}
    </Container>
  );
};

export default Cast;
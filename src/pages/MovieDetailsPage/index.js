import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetailsMovie } from 'api/apiMovies';
import ButtonBack from 'components/ButtonBack';
import { Section } from 'components/App.styled';
import { Loader } from 'components/Loader';

import MovieDetailsSection from 'components/MovieDetailsSection';
import AdditionalInfo from 'components/AdditionalInfo';
import ErrorMessage from 'components/ErrorMessage';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (detailsMovie) return;
    const getDetails = async movieId => {
      try {
        setIsError(false);
        setIsLoading(true);
        const getMovieDetails = await getDetailsMovie(movieId);
        setDetailsMovie(getMovieDetails);
      } catch ({ message }) {
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails(movieId);
  }, [detailsMovie, movieId]);

  return (
    <main>
      <ButtonBack />
      {isError && <ErrorMessage error={isError} />}
      {isLoading && <Loader />}
      {detailsMovie && <MovieDetailsSection details={detailsMovie} />}
      <Section>
        <AdditionalInfo />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </main>
  );
};

export default MovieDetailsPage;

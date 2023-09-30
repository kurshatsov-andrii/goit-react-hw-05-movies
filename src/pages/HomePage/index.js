import { Section } from 'components/App.styled';
import ErrorMessage from 'components/ErrorMessage';
import { Loader } from 'components/Loader';
import TrendingMovies from 'components/TrendingMovies';
import { useEffect, useState } from 'react';
import { getPopularMovies } from 'api/apiMovies';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (movies) return;
    const getTrendingMovies = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await getPopularMovies();
        setMovies(results);
      } catch ({ message }) {
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, [movies]);

  return (
    <main>
      <Section>
        {movies && <TrendingMovies movies={movies} />}
        {isError && <ErrorMessage error={isError} />}
        {isLoading && <Loader />}
      </Section>
    </main>
  );
};

export default HomePage;

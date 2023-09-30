import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { Notify } from 'notiflix';
import { getSearchMovie } from 'api/apiMovies';
import { Loader } from 'components/Loader';
import SearchForm from 'components/SearchForm';
import { Container, Section } from 'components/App.styled';

const MoviesList = lazy(() => import('components/MoviesList'));
const Button = lazy(() => import('components/Button'));
const ErrorMessage = lazy(() => import('components/ErrorMessage'));

const MoviesPage = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [searchParams] = useSearchParams();
  const query = useMemo(() => searchParams.get('query') ?? '', [searchParams]);

  const refMovie = useRef(query);

  const fetchSearchMovies = useCallback(async (movieSearch, page) => {
    try {
      setIsLoading(true);
      setIsError('');
      const { results, total_pages, total_results } = await getSearchMovie(
        movieSearch,
        page
      );

      if (page !== 1) smoothScroll(getNextPageHeight());
      setTotalPage(total_pages);
      setMovies(prevMovie =>
        page === 1 ? results : [...prevMovie, ...results]
      );
      if (total_results > 0) {
        Notify.success(`Hooray! We found ${total_results} movies.`);
      } else {
        Notify.failure('No movies found for your request');
      }
    } catch ({ message }) {
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refMovie.current && fetchSearchMovies(refMovie.current, page);
  }, [fetchSearchMovies, page]);

  useEffect(() => {
    movieSearch && fetchSearchMovies(movieSearch, page);
  }, [fetchSearchMovies, movieSearch, page]);

  function onChangePage() {
    setPage(prevPage => prevPage + 1);
  }

  function getNextPageHeight() {
    const { height: cardHeight } = document
      .querySelector('.galleryWrapp')
      .firstElementChild.getBoundingClientRect();
    return cardHeight;
  }
  function onSubmit(value) {
    if (value === movieSearch) return;
    setMovies(null);
    setMovieSearch(value);
    setPage(1);
    setTotalPage(0);
  }
  function smoothScroll(cardHeight) {
    scroll.scrollMore(cardHeight * 2);
  }

  return (
    <main>
      <Section>
        <Container>
          <SearchForm setMovieSearch={onSubmit} />
          {isLoading && <Loader />}
          <Suspense fallback={<Loader />}>
            {isError && !isLoading && <ErrorMessage error={isError} />}
            {movies && <MoviesList moviesList={movies} />}
            {totalPage > 1 && page < totalPage && (
              <Button onClick={onChangePage} />
            )}
          </Suspense>
        </Container>
      </Section>
    </main>
  );
};

export default MoviesPage;

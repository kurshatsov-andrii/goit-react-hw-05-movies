import { lazy, useEffect, useState } from 'react';
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
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    const fetchSearchMovies = async (query, page) => {
      try {
        setIsLoading(true);
        setIsError('');
        const { results, total_pages, total_results } = await getSearchMovie(
          query,
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
    };
    fetchSearchMovies(query, page);
  }, [query, page]);

  function onChangePage() {
    setPage(prevPage => prevPage + 1);
  }

  function getNextPageHeight() {
    const { height: cardHeight } = document
      .querySelector('.galleryWrapp')
      .firstElementChild.getBoundingClientRect();
    return cardHeight;
  }

  const onSubmit = value => {
    setSearchParams({ query: value });
    setPage(1);
    setTotalPage(0);
  };

  function smoothScroll(cardHeight) {
    scroll.scrollMore(cardHeight * 2);
  }

  return (
    <main>
      <Section>
        <Container>
          <SearchForm setMovieSearch={onSubmit} />
          {isLoading && <Loader />}
          {isError && !isLoading && <ErrorMessage error={isError} />}
          {movies && <MoviesList moviesList={movies} />}
          {totalPage > 1 && page < totalPage && (
            <Button onClick={onChangePage} />
          )}
        </Container>
      </Section>
    </main>
  );
};

export default MoviesPage;

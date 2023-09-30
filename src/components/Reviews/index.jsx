import { Container } from 'components/App.styled';
import ErrorMessage from 'components/ErrorMessage';
import { Loader } from 'components/Loader';
import ReviewsList from 'components/ReviewsList';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsReviews } from 'api/apiMovies';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  const fetchReviews = useCallback(async movieId => {
    try {
      setIsLoading(true);
      setIsError('');
      const { results } = await getDetailsReviews(movieId);
      setReviews(results);
      if (!results.length) {
        throw new Error('There are no reviews yet');
      }
    } catch ({ message }) {
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews(movieId);
  }, [fetchReviews, movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {isError && !isLoading && <ErrorMessage error={isError} />}
      {reviews && <ReviewsList reviews={reviews} />}
    </Container>
  );
};

export default Reviews;

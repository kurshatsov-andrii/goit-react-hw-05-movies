import { BiArrowBack } from 'react-icons/bi';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieLink } from './ButtonBack.styled';

const ButtonBack = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieLink to={backLinkHref}>
      <BiArrowBack />
      <span>Go back</span>
    </MovieLink>
  );
};

export default ButtonBack;

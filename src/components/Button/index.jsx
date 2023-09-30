import React from 'react';
import { ButtonStyled } from './Button.styled';

function Button({ onClick }) {
  return (
    <ButtonStyled onClick={() => onClick()} type="button">
      Load More
    </ButtonStyled>
  );
}
export default Button;
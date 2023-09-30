import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useState } from 'react';
import { ButtonUpStyled } from './ButtonUp.styled';

export const ButtonUp = () => {
  const [buttonIsHidden, setButtonIsHidden] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const scrolledDistance = window.scrollY;

    scrolledDistance >= 600
      ? setButtonIsHidden(false)
      : setButtonIsHidden(true);
  }

  return (
    <ButtonUpStyled
      onClick={() => scroll.scrollToTop()}
      style={{ display: buttonIsHidden ? 'none' : 'block' }}
    >
      <FaArrowCircleUp fill="#00ff9d" />
    </ButtonUpStyled>
  );
};

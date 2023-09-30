import styled from 'styled-components';

export const MovieItemStyled = styled('li')({
  maxWidth: '200px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',

  '&::after': {
    position: 'absolute',
    left: '0',
    bottom: '0',
    content: '""',
    transform: 'translateX(-70%)',
    height: '4px',
    width: '100%',
    background: '#00ff9d',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&:hover': {
    '&::after': {
      transform: 'translateX(0%)',
    },
  },

  'a:is(:hover,:focus) ': {
    transform: 'scale(1.02)',
  },

  '& a': {
    display: 'block',
    width: '100%',
    height: '100%',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

export const InfoBox = styled('div')({
  padding: '10px 4px',
});

export const MovieTitle = styled('h2')({
  fontSize: '20px',
  fontWeight: '500',
  color: '#f1f1f1',
});

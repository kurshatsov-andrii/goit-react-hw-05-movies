import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)({
  position: 'fixed',
  top: '105px',
  left: '5px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontWeight: '500',
  fontSize: '20px',
  padding: '5px',
  borderRadius: '8px',
  background: '#00ff9d',
  color: '#0f0f0ff1',
  transition:
    'color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    transform: 'scale(1.1)',
    color: '#0f0f0ff1',
  },
});

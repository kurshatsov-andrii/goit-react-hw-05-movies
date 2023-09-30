import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled('nav')({
  display: 'flex',
  gap: '20px',
});

export const NavLinkStyled = styled(NavLink)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '24px',
  fontWeight: '600',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
  color: '#f1f1f1',
  padding: '14px 12px',
  transition:
    'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&.active': {
    background: '#00ff9d',
    borderRadius: '8px',
  },

  '&.active span': {
    color: '#1f1f1f',
  },

  '&.active span, &:is(:hover, :focus) span': {
    transform: 'scale(1.1)',
  },
});

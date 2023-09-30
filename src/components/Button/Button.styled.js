import styled from 'styled-components';

export const ButtonStyled = styled('button')({
  display: 'block',
  margin: '40px auto 0',
  padding: '8px 16px',
  maxWidth: '180px',
  cursor: 'pointer',
  borderRadius: '4px',
  backgroundColor: '#00ff9d',
  border: '0',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: 'inherit',
  fontSize: '20px',
  lineHeight: '24px',
  fontStyle: 'normal',
  fontWeight: '600',
  color: '#1f1f1f',
  textTransform: 'uppercase',
  boxShadow:
    '0px 3px 1px -2px #000, 0px 2px 2px 0px #000, 0px 1px 5px 0px #000',
  transition:
    'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:is(:hover, :focus)': {
    color: '#1f1f1f',
    transform: 'scale(1.1)',
  },
});

import styled from 'styled-components';

export const CastListStyled = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
});

export const CastItemStyled = styled('li')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  width: 'calc((100% - 10px) / 2)',
  padding: '10px',
  boxShadow: '2px 2px 4px 0 #000, -2px -2px 4px 0 #999',
  color: '#aeaeae',
  borderRadius: '8px',
});

export const CastItemTitle = styled('h3')({
  fontSize: '22px',
  marginBottom: '20px',
});

export const CastItemCharacter = styled('p')({
  fontSize: '18px',
});

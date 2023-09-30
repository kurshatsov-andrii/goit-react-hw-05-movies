import styled from 'styled-components';

export const ReviewsListStyled = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const ReviewsItemStyled = styled('li')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  padding: '10px',
  color: '#aeaeae',
  boxShadow: '2px 2px 4px 0 #000, -2px -2px 4px 0 #999',
  borderRadius: '8px',

  '& img': {
    borderRadius: '50%',
  },
});

export const ReviewsItemTextBox = styled('div')({});

export const ReviewsItemRating = styled('p')({
  marginBottom: '10px',
});

export const ReviewsItemAuthor = styled('h3')({
  fontSize: '20px',
  fontWeight: 600,
  color: '#efefef',

  marginBottom: '10px',
});

export const ReviewsItemContent = styled('p')({
  padding: '5px',
  maxHeight: '160px',
  overflow: 'auto',
  marginBottom: '10px',
});

export const ReviewsItemPublicReview = styled('p')({
  textAlign: 'right',
});

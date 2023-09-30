const { default: styled } = require('styled-components');

export const SearchFormStyled = styled('form')({
  marginBottom: '40px',
});

export const SearchFormBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const FormLabel = styled('label')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '300px',
  height: '40px',
  boxShadow: '0 4px 4px 0 #000',
});

export const NameInput = styled('span')({
  position: 'absolute',
  top: '50%',
  left: '5px',
  fontSize: '22px',
  transform: 'translateY(-50%)',
  color: '#1f1f1f',
  transition:
    'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
});

export const InputSearch = styled('input')({
  width: '100%',
  height: '100%',
  padding: '5px',
  border: 'none',
  borderRadius: '8px 0 0 8px',
  background: '#aeaeae',
  fontSize: '22px',
  outline: 'none',

  '&::placeholder': {
    color: 'transparent',
  },

  '&:focus + span, &:not(:placeholder-shown) + span': {
    transform: 'translateY(-200%)',
    color: '#aeaeae',
  },
});

export const SubmitFormBtn = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '40px',
  border: '0',
  borderRadius: '0 8px 8px 0',
  opacity: '0.6',
  transition:
    'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  outline: 'none',
  boxShadow: '2px 4px 4px 0 #000',

  fontSize: '20px',

  '&:is(:hover,:focus) svg': {
    opacity: '1',
    transform: 'scale(1.4)',
  },
});

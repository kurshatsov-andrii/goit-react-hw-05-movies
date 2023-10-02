import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import {
  FormLabel,
  InputSearch,
  NameInput,
  SearchFormBox,
  SearchFormStyled,
  SubmitFormBtn,
} from './SearchForm.styled';

const SearchForm = ({ setMovieSearch }) => {  
  const [query , setQuery ] = useState ('');
  

  const handleSubmit = e => {
    e.preventDefault();
setMovieSearch(query);
    setQuery('');
    
  };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);    
  };

  return (    
      <SearchFormStyled onSubmit={handleSubmit}>
      <SearchFormBox>
        <FormLabel>
          <InputSearch
            onChange={handleChange}
            type="text"
            name="movie"
            autoFocus
            value={query}
            placeholder="Search movie"
          />
          <NameInput>Search Movie</NameInput>
        </FormLabel>
        <SubmitFormBtn type="submit">
          <AiOutlineSearch />
        </SubmitFormBtn>
      </SearchFormBox>
    </SearchFormStyled>
  );
};

export default SearchForm;

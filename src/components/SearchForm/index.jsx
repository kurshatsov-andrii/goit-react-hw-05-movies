import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import {
  FormLabel,
  InputSearch,
  NameInput,
  SearchFormBox,
  SearchFormStyled,
  SubmitFormBtn,
} from './SearchForm.styled';

const SearchForm = ({ setMovieSearch }) => {
  const [search, setSearch] = useSearchParams();
  const query = search.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ query: query.trim() });
    setMovieSearch(query);
  };

  const handleChange = ({ target: { value } }) => {
    setSearch(value.trim() ? { query: value } : {});
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

import NavList from 'components/NavList';
import { HeaderStyled } from './Header.styled';
import { Container } from 'components/App.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavList />        
      </Container>
    </HeaderStyled>
  );
};

export default Header;

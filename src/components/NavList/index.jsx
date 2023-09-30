import { SiKinopoisk } from 'react-icons/si';
import { AiTwotoneHome } from 'react-icons/ai';
import { NavLinkStyled, NavStyled } from './NavList.styled';

const NavList = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">
        <AiTwotoneHome />
        <span>Home</span>
      </NavLinkStyled>
      <NavLinkStyled to="/movies">
        <SiKinopoisk />
        <span>Movies</span>
      </NavLinkStyled>
    </NavStyled>
  );
};

export default NavList;

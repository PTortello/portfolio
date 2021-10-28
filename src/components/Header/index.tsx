import { NavLink } from 'react-router-dom';
import * as S from "./styles";

function Header() {
  return (
    <>
      <S.Container>
        <S.Title>Pedro Tortello</S.Title>
        <S.SubTitle>Desenvolvedor Front-end</S.SubTitle>
        <S.NavBar>
          <S.NavUnlisted>
            <NavLink to='/about'><li>Sobre</li></NavLink>
            <NavLink to='/home'><li>Habilidades</li></NavLink>
            <NavLink to='/projects'><S.NoMargin>Projetos</S.NoMargin></NavLink>
          </S.NavUnlisted>
        </S.NavBar>
      </S.Container>
    </>
  );
}

export default Header;

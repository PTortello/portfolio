import { NavLink } from 'react-router-dom';
import * as S from "./styles";
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import whatsapp from '../../images/whatsapp.svg';

function Header() {
  return (
    <S.Container>
      <S.Title>Pedro Tortello</S.Title>
      <S.SubTitle>Desenvolvedor Front-end</S.SubTitle>
      <S.Social>
        <S.Link to={{pathname: "https://www.linkedin.com/in/pedrotortello"}} target="_blank">
          <S.Image src={linkedin} alt='LinkedIn' />
        </S.Link>
        <S.Link to={{pathname: "https://github.com/ptortello"}} target="_blank">
          <S.Image src={github} alt='GitHub' />
        </S.Link>
        <S.Link to={{pathname: "https://api.whatsapp.com/send?phone=5515991049183"}} target="_blank">
          <S.Image src={whatsapp} alt='WhatsApp' />
        </S.Link>
      </S.Social>
      <S.NavBar>
        <S.NavUnlisted>
          <NavLink to='/about'><li>Sobre</li></NavLink>
          <NavLink to='/home'><li>Habilidades</li></NavLink>
          <NavLink to='/projects'><S.NoMargin>Projetos</S.NoMargin></NavLink>
        </S.NavUnlisted>
      </S.NavBar>
    </S.Container>
  );
}

export default Header;

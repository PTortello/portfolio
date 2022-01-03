import { NavLink } from 'react-router-dom';
import routes from '../../constants/routes';
import * as S from "./styles";
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import whatsapp from '../../images/whatsapp.svg';

function Header() {
  return (
    <S.Container>
      <S.Title>Pedro Tortello</S.Title>
      <S.SubTitle>Desenvolvedor front-end</S.SubTitle>
      <S.Social>
        <S.Link to={{pathname: "https://www.linkedin.com/in/pedrotortello/"}} target="_blank" rel="noopener">
          <S.Image src={linkedin} alt='LinkedIn' />
        </S.Link>
        <S.Link to={{pathname: "https://github.com/ptortello/"}} target="_blank" rel="noopener">
          <S.Image src={github} alt='GitHub' />
        </S.Link>
        <S.Link to={{pathname: "https://api.whatsapp.com/send?phone=5515991049183/"}} target="_blank" rel="noopener">
          <S.Image src={whatsapp} alt='WhatsApp' />
        </S.Link>
      </S.Social>
      <S.NavBar>
        <S.NavUnlisted>
          <NavLink to={routes.home}><li>Sobre</li></NavLink>
          <NavLink to={routes.projects}><li>Projetos</li></NavLink>
        </S.NavUnlisted>
      </S.NavBar>
    </S.Container>
  );
}

export default Header;

import { NavLink } from 'react-router-dom';
import * as S from "./styles";

function Content() {
  return (
    <S.Content>
      <NavLink to='/about'><li>Sobre</li></NavLink>
      <NavLink to='/home'><li>Habilidades</li></NavLink>
      <NavLink to='/projects'><li>Projetos</li></NavLink>
    </S.Content>
  );
}

export default Content;

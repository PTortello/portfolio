import { NavLink } from 'react-router-dom';
import routes from '../../constants/routes';
import * as S from "./styles";

function Content() {
  return (
    <S.Content>
      <NavLink to={routes.home}><li>Sobre</li></NavLink>
      <NavLink to={routes.projects}><li>Projetos</li></NavLink>
    </S.Content>
  );
}

export default Content;

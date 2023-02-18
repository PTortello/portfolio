import { NavLink } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { SITES } from "constants/sites";
import * as S from "./styles";

function Header() {
  return (
    <S.Container>
      <S.Title>Pedro Tortello</S.Title>
      <S.SubTitle>Desenvolvedor front-end</S.SubTitle>
      <S.Social>
        {SITES.map((site, key) => (
          <S.Link
            to={{ pathname: site.url }}
            target="_blank"
            rel="noopener"
            key={key}
          >
            <S.Image src={site.icon} alt={site.name} />
          </S.Link>
        ))}
      </S.Social>
      <S.NavBar>
        <S.NavUnlisted>
          <NavLink to={ROUTES.HOME}>
            <li>Sobre</li>
          </NavLink>
          <NavLink to={ROUTES.PROJECTS}>
            <li>Projetos</li>
          </NavLink>
        </S.NavUnlisted>
      </S.NavBar>
    </S.Container>
  );
}

export default Header;

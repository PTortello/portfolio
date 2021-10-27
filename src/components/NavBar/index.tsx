import React from "react";
import { NavLink } from 'react-router-dom';
import * as S from "./styles";

function NavBar() {
  return (
    <S.NavUnlisted>
      <NavLink to='/about'><li>Sobre</li></NavLink>
      <NavLink to='/home'><li>Habilidades</li></NavLink>
      <NavLink to='/projects'><li>Projetos</li></NavLink>
    </S.NavUnlisted>
  );
}

export default NavBar;

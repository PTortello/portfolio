import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to='/about'>Sobre</Link> |&nbsp;
      <Link to='/home'>Habilidades</Link> |&nbsp;
      <Link to='/projects'>Projetos</Link>
    </>
  );
}

export default NavBar;

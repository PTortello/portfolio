import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div>NavBar</div>
      <Link to='/home'>Início</Link> |&nbsp;
      <Link to='/about'>Sobre mim</Link> |&nbsp;
      <Link to='/projects'>Projetos</Link>
    </>
  );
}

export default NavBar;

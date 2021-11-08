import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'title social navbar'
    'subtitle social navbar';
  margin-top: 20px;
  margin-left: 2%;
  width: 900px;
  min-width: 700px;
  align-items: flex-end;

  @media (max-width: 799px) {
    grid-template-areas:
      'title social'
      'subtitle navbar';
    width: 95%;
    min-width: unset;
    margin-top: 10px;
  }
`

export const Title = styled.div`
  grid-area: title;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: white;
  font-size: xx-large;

  @media (max-width: 799px) {
    font-size: 1.35em;
    margin-left: 15px;
  }
`

export const SubTitle = styled(Title)`
  grid-area: subtitle;
  font-size: medium;

  @media (max-width: 799px) {
    font-size: small;
  }
`

export const Social = styled.div`
  grid-area: social;
  display: flex;
  justify-content: center;

  @media (max-width: 799px) {
    justify-content: right;
  }
`

export const NavBar = styled(Social)`
  grid-area: navbar;
  justify-content: right;

  @media (max-width: 799px) {
    margin-right: -20px;
  }
`

export const Link = styled(NavLink)`
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 1px 5px 0px;
  margin: -2px 10px -2px -2px;
`

export const Image = styled.img`
  padding: 0em 0.3em;
  width: 30px;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.2);
  }
  
  @media (max-width: 799px) {
    width: 25px;
    padding: 0;
  }
`

export const NavUnlisted = styled.ul`
  width: 210px;
  display: flex;
  margin: 0px;
  a {
    text-decoration: none;
  }
  li {
    color: white;
    margin: 0 0.8rem;
    position: relative;
    list-style: none;
  }
  .active {
    li {
      font-weight: bold;
      border-bottom: 3px solid hsl(142 90% 61%);
    }
  }

  @media (max-width: 799px) {
    width: 100%;
    font-size: small;
    margin-top: 10px;
  }
`

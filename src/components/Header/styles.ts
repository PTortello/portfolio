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
`

export const Title = styled.div`
  grid-area: title;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: white;
  font-size: xx-large;
`

export const SubTitle = styled(Title)`
  grid-area: subtitle;
  font-size: medium;
`

export const Social = styled.div`
  grid-area: social;
  display: flex;
  justify-content: right;
`

export const NavBar = styled(Social)`
  grid-area: navbar;
`

export const Link = styled(NavLink)`
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 1px 5px 0px;
  margin: -2px 10px -2px -2px;
`

export const Image = styled.img`
  padding: 0em 0.2em;
  width: 30px;
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
`

export const NoMargin = styled.li`
  margin-right: 0px !important;
`

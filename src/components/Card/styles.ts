import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const padding = '1.5rem';

export const Title = styled.h2`
  position: relative;
  width: max-content;

  &:after {
    content: "";
    position: absolute;
    height: 4px;
    left: calc(${padding} * -1);
    bottom: -4px;
    width: calc(${padding} + 100%);
    background: hsl(142 90% 61%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 600ms ease;
  }
`

export const Content = styled.div`
  padding: ${padding};
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(20 0% 0% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
  transform: translateY(58%);
  transition: transform 500ms ease;
`

export const Container = styled.div`
  background-image: url(${(props: { img: string; }) => props.img});
  background-size: cover;
  padding: 8rem 0 0;
  max-width: 35ch;
  font-size: 0.75rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 3px 3px 7px 0 rgba(0,0,0,0.5);
  
  &:hover ${Title}::after {
    transform: scaleX(1);
  }
  
  &:hover ${Content} {
    transform: translateY(0%);
    transition-delay: 500ms;
  }
`

export const Description = styled.p`
  color: rgb(255 255 255 / 0.9);
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
`

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: hsl(207, 19%, 9%);
  background-color: hsl(142 90% 61%);
  padding: 0.5em 1.25em;
  border-radius: 0.25em;
  margin-right: 3em;

  &:hover, :focus {
    background-color: white;
  }
`

export const Image = styled.img`
  padding: 0em 0.3em;
  width: 25px;
`

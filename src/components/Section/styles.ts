import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
`

export const Heading = styled.h2`
  font-size: 1.5em;
  position: relative;
  width: max-content;

  &:after {
    content: "";
    position: absolute;
    height: 4px;
    left: 0;
    bottom: -4px;
    width: 100%;
    background: hsl(142 90% 61%);
  }
`

export const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
`

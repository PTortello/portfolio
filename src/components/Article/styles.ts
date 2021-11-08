import styled from 'styled-components';
import lingNaviBg from '../../images/link-navi-bg.png';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 600px;
  width: 800px;
  margin: 0 auto;
  background-color: #0055ce;
  border-radius: 20px;
  box-shadow: inset 3px 3px 7px 1px rgba(0,0,0,0.7);
  font-weight: normal;
  background-image: url(${lingNaviBg});
  background-size: 23%;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-blend-mode: soft-light;

  @media (max-width: 799px) {
    width: 300px;
    height: unset;
    font-size: 0.9em;
  }
`

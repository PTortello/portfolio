import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 262px 262px 262px;
  grid-gap: 1rem;
  line-height: 1.1;

  @media (max-width: 799px) {
    grid-template-columns: none;
    justify-content: center;
  }
`

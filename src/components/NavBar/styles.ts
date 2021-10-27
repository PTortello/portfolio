import styled from 'styled-components';

export const NavUnlisted = styled.ul`
  display: flex;
  margin-top: 30px;

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
      border-bottom: 3px solid palegreen;
    }
  }
`;

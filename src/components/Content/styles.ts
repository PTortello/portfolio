import styled from 'styled-components';

export const Content = styled.div`
  background-color: rgba(255,255,255,0.85);
  border-radius: 20px;
  margin: 15px 2%;
  width: 800px;
  min-width: 700px;
  height: 600px;
  padding: 25px;
  box-shadow: 15px 20px 30px 0 rgba(0,0,0,0.8);
  color: white;
  font-weight: bold;

  @media (max-width: 799px) {
    margin: 15px auto;
    width: 300px;
    height: unset;
    min-width: unset;
  }
`;

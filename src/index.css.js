import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

export default createGlobalStyle`
 ${normalize}

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
  }
 
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const Main = styled.main`
  min-height: calc(60vh - 60px);
  display: flex;
`;
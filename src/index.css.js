import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import styled from 'styled-components';

export default createGlobalStyle`
 ${normalize}

 body {
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/blog_bg.jpg');
    background-repeat: repeat;
    filter: opacity(0.12);
  }
 }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    position: relative;
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
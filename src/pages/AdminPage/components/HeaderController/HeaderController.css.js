import styled from 'styled-components';


export const HeaderInput = styled.input`
  font-family: 'Kalam', cursive;
  padding: 0 0 1rem 1rem;
  width: calc(100% - 1rem);
  /* max-width: 800px; */
  margin: 2rem auto;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 1px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  
  &:hover {
    background: lightgrey;
  }
`;
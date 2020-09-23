import styled from 'styled-components';


export const HeaderInput = styled.input`
  padding: 10px;
  margin: 10px 20px;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 2px;
  border: none;
  outline: none;
  width: calc(100% - 60px);
  border-bottom: 2px solid black;
  
  &:hover {
    background: lightgrey;
  }
`;
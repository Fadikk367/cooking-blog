import styled from 'styled-components';


export const Comment = styled.article`
  border: 1px solid blue;
  background: lightpink;
  padding: 10px;
  padding-left: ${props => props.indentation*20}px;

  form {
    display: flex;
    flex-direction: column;
  }
`;
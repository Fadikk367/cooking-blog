import styled from 'styled-components';

export const ConfirmationWrapper = styled.div`
  
`;

export const ConfirmationMessage = styled.h3`
  font-weight: 600;
  font-size: 1.2em;
  margin-top: 10px;
  border-radius: 3px;
  background-color: orange;
  padding: 5px;
`;

export const RecipeDetailRow = styled.p`
  width: 100%;
  margin: 0 0 10px 0;

  h4 {
    background-color: lightgrey;
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 10px;
  }
  span {
    margin-left: 20px;
  }
`;

export const ConfirmationButton = styled.button`
  background-color: #ad3636;
  font-size: 1.1em;
  color: white;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 10px 30px;
  cursor: pointer;
  justify-self: flex-end;
  margin-top: auto;
`;
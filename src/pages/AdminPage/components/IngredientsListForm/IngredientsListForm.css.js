import styled from 'styled-components';


export const IngredientListTitle = styled.h3`
  font-size: 1.2em;
  padding: 10px 20px;
  font-weight: 500;
  border-bottom: 2px solid grey;
  margin-bottom: 20px;
`;

export const IngredientItem = styled.li`
  margin-left: 20px;
  padding: 10px 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .remove-btn {
    display: none;
    padding: 0 5px;
    border-radius: 10px;
    background: white;
    cursor: pointer;
  }

  &:hover .remove-btn {
    display: inline;
  }
`;

export const IngredientInput = styled.input`
  background: transparent;
  padding: 3px 5px;
  border: 1px solid grey;
  border-radius: 15px;

  &:focus {
    border: 1px solid grey;
    background: white;
  }
`;
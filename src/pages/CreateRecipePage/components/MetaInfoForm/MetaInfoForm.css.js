import styled from 'styled-components';

export const MetaFormWrapper = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const MetaLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  /* margin-bottom: 20px; */
  font-size: 1.1.em;
  background: white;

  &:nth-child(odd) {
    background-color: #dfe5f0;
  }
`;

export const MetaInput = styled.input`
  padding: 10px;
  font-size: 1.1.em;
  background: white;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  transition: background-color 0.3s ease-in-out;
  width: 200px;

  &:hover {
    background-color: lightgrey;
  }

  &:focus {
    background-color: lightgray;
  }
`;

export const MetaTextara = styled.textarea`
  padding: 10px;
  font-size: 1.1.em;
  background: white;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  transition: background-color 0.3s ease-in-out;
  flex-grow: 1;
  max-width: 800px;
  height: 60px;
  resize: none;

  &:hover {
    background-color: lightgrey;
  }

  &:focus {
    background-color: lightgray;
  }
`;

export const MetaSelect = styled.select`
  padding: 10px;
  font-size: 1.1.em;
  background: white;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  transition: background-color 0.3s ease-in-out;
  width: 220px;

  &:hover {
    background-color: lightgrey;
  }

  &:focus {
    background-color: lightgray;
  }
`;

export const LabelText = styled.span`
  font-size: 1.1.em;
  margin-right: 20px;
  width: 150px;
`;

export const LabelIcon = styled.img`
  display: block;
  width: 30px;
  margin-right: 20px;
`;

export const RecipeTag = styled.span`
  padding: 10px;
  font-size: 1em;
  border-radius: 10px;
  background-color: ${props => props.color};
  margin-left: 10px;
`;
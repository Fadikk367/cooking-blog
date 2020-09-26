import styled from 'styled-components';


export const RecipeTitle = styled.h1`
  margin: 0;
  padding: 30px;
  border: 2px solid black;
  text-align: center;
  font-size: 2.5em;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const RecipeHeader = styled.h2`
  padding: 2rem;
  margin: 0;
  background: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const RecipeMainPhoto = styled.img`
  display: block;
  width: 100%;
  margin: 2rem auto;
  border-radius: 15px;
`;

export const RecipeIngredientList = styled.section`
  margin: 2rem 6rem;
  h3 {
    padding: 1rem;
    font-size: 1.5em;
    font-weight: 400;
    letter-spacing: 1px;
    border-bottom: 1px solid black;
  }
  ul {
    padding: 1rem;
    list-style-type: none;
    font-size: 1.3em;

    li {
      padding: 0.5rem 0;
    }
  }
`;

export const RecipeParagraph = styled.p`
  margin: 2rem 6rem;
  font-size: 1.3em;
  text-justify: justfy;
`;
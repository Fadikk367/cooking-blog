import styled from 'styled-components';


export const RecipeTitle = styled.h1`
font-family: 'Kalam', cursive;
  margin: 2rem 2rem 0 2rem;
  padding: 30px;
  border: 2px solid black;
  text-align: center;
  font-size: 2.5em;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const RecipeHeader = styled.h2`
  font-family: 'Kalam', cursive;
  padding: 0 0 1rem 1rem;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 1px;
  border-bottom: 2px solid black;
`;

export const RecipePhoto = styled.img`
  display: block;
  width: calc(100% - 4rem);
  /* max-width: 800px; */
  padding: 0 2rem;
  margin: 2rem 0;
  border-radius: 15px;
`;

export const RecipeIngredientList = styled.section`
  margin: 2rem 8rem;
  h3 {
    margin: 0;
    padding: 0 0 0.5rem 0.5rem;
    font-family: 'Kalam', cursive;
    font-size: 1.8em;
    font-weight: 500;
    letter-spacing: 1px;
    border-bottom: 1px solid black;
  }
  ul {
    list-style-type: disc;
    padding: 0.5rem 2rem;
    font-family: 'Kalam', cursive;
    font-size: 1.5em;

    li {
      padding: 0.3rem 0;
    }
  }
`;

export const RecipeParagraph = styled.p`
  margin: 1rem auto;
  font-size: 1.3em;
  max-width: 800px;
  text-align: justify;
`;
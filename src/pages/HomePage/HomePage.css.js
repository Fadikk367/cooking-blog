import styled from 'styled-components';


export const HomePageContainer = styled.div`
  padding: 20px;
`;

export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
`;

export const RecipeCard = styled.article`
  width: 100%;
  height: 400px;
  background-color: red;
`;
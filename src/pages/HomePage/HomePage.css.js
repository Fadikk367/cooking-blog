import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
`;


export const HomePageContainer = styled.div`
  padding: 30px;
`;

export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  /* grid-auto-rows: 1fr; */
  grid-gap: 30px;
`;

export const RecipeCard = styled.article`
  width: 100%;
  height: 400px;
  background-color: red;
`;
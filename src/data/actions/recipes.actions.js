import axios from 'axios';
import { RECIPES_GET, RECIPES_ADD, RECIPE_GET } from '../constants';

export const fetchRecipeCards = () => {
  const promise = axios.get('recipes');

  console.log('recipes aciotn: ', promise);

  return {
    promise,
    type: RECIPES_GET
  };
}

export const fetchRecipe = recipeId => {
  const promise = axios.get(`${recipeId}`);

  return {
    promise,
    type: RECIPE_GET
  };
}

export const addRecipe = ({ title, content, difficulty, ingredients }) => {
  const promise = axios.post('recipes', {
    title,
    content,
    difficulty,
    ingredients
  });

  return {
    promise,
    type: RECIPES_ADD
  };
}
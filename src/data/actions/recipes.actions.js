import axios from 'axios';
import { RECIPES_GET, RECIPES_ADD, RECIPE_GET, RECIPE_DELETE } from '../constants';

export const fetchRecipeCards = () => {
  const promise = axios.get('/recipes');

  return {
    promise,
    type: RECIPES_GET
  };
}

export const fetchRecipe = recipeId => {
  const promise = axios.get(`/recipes/${recipeId}`);

  return {
    promise,
    type: RECIPE_GET
  };
}

export const addRecipe = ({ title, content, difficulty, ingredients }) => {
  const promise = axios.post('/recipes', {
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

export const deleteRecipe = (recipeId, authToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  }

  const promise = axios.delete(`/recipes/${recipeId}`, config);

  return {
    promise,
    type: RECIPE_DELETE
  };
}
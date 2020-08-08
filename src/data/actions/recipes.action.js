import axios from 'axios';
import { RECIPES_GET } from '../constants';

export const fetchRecipes = () => {
  const promise = axios.get('recipes');

  console.log('recipes aciotn: ', promise);

  return {
    promise,
    type: RECIPES_GET
  };
}
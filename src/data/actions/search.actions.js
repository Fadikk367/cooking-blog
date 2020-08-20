import axios from 'axios';
import { TITLES_GET } from '../constants';

export const fetchRecipeTitles = () => {
  const promise = axios.get('recipes/titles');

  return {
    promise,
    type: TITLES_GET
  };
}
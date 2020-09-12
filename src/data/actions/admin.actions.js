import { CREATE_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT, POST_RECIPE } from '../constants/admin.constants';
import axios from 'axios';

export const addRecipe = ({ title = 'tit', content = 'cont', difficulty = 'easy', ingredients = ['marchew'], photos, elements }) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('difficulty', difficulty);
  formData.append('ingredients', ingredients);
  formData.append('elements', JSON.stringify(elements));
  for (let photo of photos)
    formData.append('photos', photo);

  const promise = axios.post('recipes', formData, config);

  return {
    promise,
    type: POST_RECIPE
  };
}

export const createRecipeElementData = (elementType, elementId) => {
  return {
    type: CREATE_ELEMENT,
    payload: {
      elementType,
      elementId,
    }
  }
}

export const updateRecipeElementData = (elementId, update) => {
  return {
    type: UPDATE_ELEMENT,
    payload: {
      elementId,
      update,
    }
  }
}

export const deleteRecipeElementData = elementId => {
  return {
    type: DELETE_ELEMENT,
    payload: {
      elementId,
    }
  }
}
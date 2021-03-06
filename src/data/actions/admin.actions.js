import { CREATE_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT, POST_RECIPE, MOVE_ELEMENT, UPDATE_METADATA, UPDATE_TITLE } from '../constants/admin.constants';
import axios from 'axios';

export const addRecipe = ({ title, metadata, elements, photos }) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('metadata', JSON.stringify(metadata));
  formData.append('elements', JSON.stringify(elements));
  for (let photo of photos)
    formData.append('photos', photo);

  const promise = axios.post('/recipes', formData, config);

  return {
    promise,
    type: POST_RECIPE
  };
}

export const createRecipeElementData = (elementType, elementId, index) => {
  return {
    type: CREATE_ELEMENT,
    payload: {
      elementType,
      elementId,
      index,
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

export const moveRecipeElementData = (elementId, indexOffset) => {
  return {
    type: MOVE_ELEMENT,
    payload: {
      elementId,
      indexOffset,
    }
  }
}

export const updateRecipeMetadata = (metaKey, metaValue) => {
  return {
    type: UPDATE_METADATA,
    payload: {
      metaKey,
      metaValue,
    }
  }
}

export const updateRecipeTitle = title => {
  return {
    type: UPDATE_TITLE,
    payload: {
      title,
    }
  }
}
import { CREATE_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT } from '../constants/admin.constants';


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
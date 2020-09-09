import { CREATE_ELEMENT, UPDATE_ELEMENT } from '../constants/admin.constants';


export const createRecipeElement = elementType => {
  return {
    type: CREATE_ELEMENT,
    payload: {
      elementType,
    }
  }
}

export const updateRecipeElement = (elementId, update) => {
  return {
    type: UPDATE_ELEMENT,
    payload: {
      elementId,
      update,
    }
  }
}
import { CREATE_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT } from '../constants/admin.constants';
import { Element } from '../../utils/elementTypes';
import { deleteRecipeElementData } from '../actions/admin.actions';

// const idGenerator = elementIdGenerator();

const initialState = {
  auth: {
    isAuthentificated: false,
    authToken: null,
  },
  recipe: {
    metaInfo: {},
    elements: {},
  },
}

export const adminReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ELEMENT: {
      return createRecipeElement(state, action);
    }
    case UPDATE_ELEMENT: {
      return updateRecipeElement(state, action);
    }
    case DELETE_ELEMENT: {
      return deleteRecipeElement(state, action);
    }
    default:
      return state;
  }
}

export default adminReducer;


const createRecipeElement = (state, action) => {
  const elementType = action.payload.elementType;
  let newRecipeElement;

  switch (elementType) {
    case Element.PHOTO:
      newRecipeElement = {
        type: Element.PHOTO,
        photo: null,
      };
      break;
    case Element.PARAGRAPH:
      newRecipeElement = {
        type: Element.PARAGRAPH,
        text: '',
      }
      break;
    case Element.LIST:
      newRecipeElement = {
        type: Element.LIST,
        title: '',
        items: [],
      }
      break;
    default:
      return state;
  }

  const elementId = action.payload.elementId;

  return {
    ...state,
    recipe: {
      ...state.recipe,
      elements: {
        ...state.recipe.elements,
        [elementId]: newRecipeElement,
      }
    }
  }
}


const updateRecipeElement = (state, action) => {
  const elementToUpdate = state.recipe.elements[action.payload.elementId];

  switch (elementToUpdate.type) {
    case Element.PHOTO:
      if (elementToUpdate.photo)
        URL.revokeObjectURL(elementToUpdate.photo);
      elementToUpdate.photo = action.payload.update;
      break;
    case Element.PARAGRAPH:
      elementToUpdate.text = action.payload.update;
      break;

    case Element.LIST:
      elementToUpdate.title = action.payload.update.title;
      elementToUpdate.items = action.payload.update.items;
      break;
    default:
      return state;
  }

  return {
    ...state,
    recipe: {
      ...state.recipe,
      elements: { ...state.recipe.elements }
    }
  }
}


const deleteRecipeElement = (state, action) => {
  const { elementId } = action.payload;

  delete state.recipe.elements[elementId];

  return {
    ...state,
    recipe: {
      ...state.recipe,
      elements: { ...state.recipe.elements }
    }
  }
}

// const generateRecipeElementId = (idPrefix) => {
//   return `${idPrefix}-${idGenerator.next().value}`;
// }

// function* elementIdGenerator() {
//   let id = 0;
//   while (true) {
//     yield id++;
//   }
// }
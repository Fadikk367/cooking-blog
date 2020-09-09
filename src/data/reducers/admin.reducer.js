import { CREATE_ELEMENT, UPDATE_ELEMENT } from '../constants/admin.constants';
import { Element } from '../../utils/elementTypes';

const idGenerator = elementIdGenerator();

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
    default:
      return state;
  }
}


const createRecipeElement = (state, action) => {
  const elementType = action.payload.elementType;
  let newRecipeElement;
  let idPrefix = ''

  switch (elementType) {
    case Element.PHOTO:
      newRecipeElement = {
        type: Element.PHOTO,
        photo: null,
      };
      idPrefix = 'img';
      break;
    case Element.PARAGRAPH:
      newRecipeElement = {
        type: Element.PARAGRAPH,
        text: '',
      }
      idPrefix = 'p'
      break;
    default:
      return state;
  }

  const elementId = generateRecipeElementId(idPrefix);

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
      elementToUpdate.photo = action.payload.update;
      break;
    case Element.PARAGRAPH:
      elementToUpdate.text = action.payload.update;
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

const generateRecipeElementId = (idPrefix) => {
  return `${idPrefix}-${idGenerator.next().value}`;
}

function* elementIdGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
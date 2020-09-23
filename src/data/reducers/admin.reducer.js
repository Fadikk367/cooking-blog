import { CREATE_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT, MOVE_ELEMENT } from '../constants/admin.constants';
import { Element } from '../../utils/elementTypes';

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
    case CREATE_ELEMENT: 
      return createRecipeElement(state, action);
    case UPDATE_ELEMENT: 
      return updateRecipeElement(state, action);
    case DELETE_ELEMENT: 
      return deleteRecipeElement(state, action);
    case MOVE_ELEMENT:
      return swapRecipeElements(state, action);
    default:
      return state;
  }
}

export default adminReducer;


const createRecipeElement = (state, action) => {
  const { elementType, index } = action.payload;
  let newRecipeElement;

  switch (elementType) {
    case Element.PHOTO:
      newRecipeElement = {
        type: Element.PHOTO,
        photo: null,
        index,
      };
      break;
    case Element.PARAGRAPH:
      newRecipeElement = {
        type: Element.PARAGRAPH,
        text: '',
        index,
      }
      break;
    case Element.LIST:
      newRecipeElement = {
        type: Element.LIST,
        title: '',
        items: [],
        index,
      }
      break;
    case Element.HEADER:
      newRecipeElement = {
        type: Element.HEADER,
        text: '',
        index,
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
    case Element.HEADER:
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
  const deletedElementIndex = state.recipe.elements[elementId].index;
  delete state.recipe.elements[elementId];

  const elementsToDecrementIndex = Object.values(state.recipe.elements).filter(element => element.index > deletedElementIndex);
  elementsToDecrementIndex.forEach(element => element.index--);

  return {
    ...state,
    recipe: {
      ...state.recipe,
      elements: { ...state.recipe.elements }
    }
  }
}

const swapRecipeElements = (state, action) => {
  const { elementId, indexOffset } = action.payload;
  console.log({ elementId, indexOffset });

  const newElementIndex = state.recipe.elements[elementId].index + indexOffset;

  const elementBeingMoved = state.recipe.elements[elementId];
  const tmp = Object.values(state.recipe.elements).find(element => element.index === newElementIndex);
  if (!tmp) return state;

  tmp.index = elementBeingMoved.index;
  elementBeingMoved.index = newElementIndex;

  return {
    ...state,
    recipe: {
      ...state.recipe,
      elements: { ...state.recipe.elements }
    }
  }
}
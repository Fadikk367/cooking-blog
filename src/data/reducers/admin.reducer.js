import { CREATE_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT, MOVE_ELEMENT, UPDATE_METADATA, UPDATE_TITLE } from '../constants/admin.constants';
import { Element } from '../../utils/elementTypes';

// const idGenerator = elementIdGenerator();

const initialState = {
  auth: {
    isAuthentificated: true,
    authToken: null,
  },
  recipe: {
    title: '',
    metadata: {},
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
    case UPDATE_METADATA:
      return updateRecipeMetadata(state, action);
    case UPDATE_TITLE:
      return updateRecipeTitle(state, action);
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
        orientation: '',
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
    case Element.HINT:
      newRecipeElement = {
        type: Element.HINT,
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
      elementToUpdate.photo = action.payload.update.url;
      elementToUpdate.orientation = action.payload.update.orientation;
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
    case Element.HINT:
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

const updateRecipeMetadata = (state, action) => {
  console.log('admin reducer metadata update handler');
  const { metaKey, metaValue } = action.payload;
  console.log({ metaKey, metaValue });
  return {
    ...state,
    recipe: {
      ...state.recipe,
      metadata: {
        ...state.recipe.metadata,
        [metaKey]: metaValue,
      }
    }
  }
}

const updateRecipeTitle = (state, action) => {
  const { title } = action.payload;

  return {
    ...state,
    recipe: {
      ...state.recipe,
      title,
    }
  }
}
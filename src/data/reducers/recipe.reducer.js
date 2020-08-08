import { 
  RECIPES_GET_REQUEST, 
  RECIPES_GET_SUCCESS, 
  RECIPES_GET_FAILURE, 

  RECIPE_GET_REQUEST,
  RECIPE_GET_SUCCESS,
  RECIPE_GET_FAILURE,

  RECIPES_ADD_REQUEST,
  RECIPES_ADD_SUCCESS,
  RECIPES_ADD_FAILURE,

  LOADING_STATES,
} from '../constants';

const initialState = {
  loadingState: null,
  recipeCards: [],
  loadedRecipes: new Map()
}

const recipesReducer = (state = initialState, action) => {
  const loadingStateCopy = { ...state.loadingState };

  switch(action.type) {
    case RECIPES_GET_REQUEST: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING
        }
      };
    }
    case RECIPES_GET_SUCCESS: {
      delete loadingStateCopy.RECIPES_GET_REQUEST;
      return {
        ...state,
        recipeCards: action.payload,
        loadingState: loadingStateCopy
      };
    }
    case RECIPES_GET_FAILURE: {
      delete loadingStateCopy.RECIPES_GET_REQUEST;
      return {
        ...state,
        recipeCards: [],
        loadingState: loadingStateCopy
      };
    }
    case RECIPES_ADD_REQUEST: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING
        }
      };
    }
    case RECIPES_ADD_SUCCESS: {
      delete loadingStateCopy.RECIPE_ADD_REQUEST;
      return {
        ...state,
        recipeCards: [ ...state.recipeCards, action.payload],
        loadingState: loadingStateCopy
      };
    }
    case RECIPES_ADD_FAILURE: {
      delete loadingStateCopy.RECIPE_ADD_REQUEST;
      return {
        ...state,
        loadingState: loadingStateCopy
      };
    }
    case RECIPE_GET_REQUEST: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING
        }
      };
    }
    case RECIPE_GET_SUCCESS: {
      delete loadingStateCopy.RECIPE_GET_REQUEST;

      return {
        ...state,
        loadedRecipes: state.loadedRecipes.set(action.payload._id, action.payload),
        loadingState: loadingStateCopy
      };
    }
    case RECIPE_GET_FAILURE: {
      delete loadingStateCopy.RECIPE_GET_REQUEST;
      return {
        ...state,
        loadingState: loadingStateCopy
      };
    }
    default:
      return state;
  }
}

export default recipesReducer;
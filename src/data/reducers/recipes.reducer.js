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

  RECIPE_DELETE_REQUEST,
  RECIPE_DELETE_SUCCESS,
  RECIPE_DELETE_FAILURE,

  LOADING_STATES,
} from '../constants';

const initialState = {
  loadingState: null,
  recipeCards: [],
  loadedRecipes: {},
  recipe: {}
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
        recipe: action.payload,
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
    case RECIPE_DELETE_REQUEST: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING
        }
      };
    }
    case RECIPE_DELETE_SUCCESS: {
      delete loadingStateCopy.RECIPE_DELETE_REQUEST;

      const deletedRecipeId = action.payload.deletedRecipe._id;
      const deletedRecipeCardIndex = state.recipeCards.findIndex(recipeCard => recipeCard._id === deletedRecipeId);
      state.recipeCards.splice(deletedRecipeCardIndex, 1);

      return {
        ...state,
        recipeCards: [...state.recipeCards],
        loadingState: loadingStateCopy
      };
    }
    case RECIPE_DELETE_FAILURE: {
      delete loadingStateCopy.RECIPE_DELETE_REQUEST;

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
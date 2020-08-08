import { 
  RECIPES_GET_REQUEST, 
  RECIPES_GET_FAILURE, 
  RECIPES_GET_SUCCESS, 
  LOADING_STATES,
} from '../constants';

const initialState = {
  loadingState: null,
  recipes: []
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
      console.log('recipes reducer: ', action.payload);
      delete loadingStateCopy.RECIPES_GET_REQUEST;
      return {
        ...state,
        recipes: action.payload,
        loadingState: loadingStateCopy
      };
    }
    case RECIPES_GET_FAILURE: {
      delete loadingStateCopy.RECIPES_GET_REQUEST;
      return {
        ...state,
        recipes: [],
        loadingState: loadingStateCopy
      };
    }
    default:
      return state;
  }
}

export default recipesReducer;
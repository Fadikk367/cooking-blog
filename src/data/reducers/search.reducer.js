import {
  TITLES_GET_REQUEST,
  TITLES_GET_SUCCESS,
  TITLES_GET_FAILURE,

  LOADING_STATES
} from 'data/constants';

const initialState = {
  loadingState: null,
  titles: []
}

const searchReducer = (state = initialState, action) => {
  const loadingStateCpy = { ...state.loadingState };

  switch(action.type) {
    case TITLES_GET_REQUEST: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING
        }
      }
    }
    case TITLES_GET_SUCCESS: {
      delete loadingStateCpy.TITLES_GET_SUCCESS;
      return {
        ...state,
        titles: action.payload,
        loadingState: loadingStateCpy
      }
    }
    case TITLES_GET_FAILURE: {
      delete loadingStateCpy.TITLES_GET_FAILURE;
      return {
        ...state,
        loadingState: loadingStateCpy
      }
    }
    default:
      return state;
  }
}

export default searchReducer;
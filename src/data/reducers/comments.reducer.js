import { 
  COMMENTS_GET_REQUEST, 
  COMMENTS_GET_SUCCESS, 
  COMMENTS_GET_FAILURE, 

  COMMENT_ADD_REQUEST,
  COMMENT_ADD_SUCCESS,
  COMMENT_ADD_FAILURE,

  LOADING_STATES,
} from '../constants';

const initialState = {
  loadingState: null,
  comments: []
}

const commentsReducer = (state = initialState, action) => {
  const loadingStateCopy = { ...state.loadingState };

  switch(action.type) {
    case COMMENTS_GET_REQUEST: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING
        }
      };
    }
    case COMMENTS_GET_SUCCESS: {
      delete loadingStateCopy.COMMENTS_GET_REQUEST;

      return {
        ...state,
        loadingState: loadingStateCopy,
        comments: action.payload
      };
    }
    case COMMENTS_GET_FAILURE: {
      delete loadingStateCopy.COMMENTS_GET_REQUEST;
      return {
        ...state,
        loadingState: loadingStateCopy
      };
    }
    case COMMENT_ADD_REQUEST: {
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING
        }
      };
    }
    case COMMENT_ADD_SUCCESS: {
      delete loadingStateCopy.COMMENT_ADD_REQUEST;
      const createdComment = action.payload.createdComment;

      if (!createdComment.parentCommentId) {
        return {
          ...state,
          loadingState: loadingStateCopy,
          comments: [...state.comments, createdComment]
        };
      } else {
        return {
          ...state,
          loadingState: loadingStateCopy,
        };
      }
    }
    case COMMENT_ADD_FAILURE: {
      delete loadingStateCopy.COMMENT_ADD_REQUEST;
      return {
        ...state,
        loadingState: loadingStateCopy
      };
    }
    default:
      return state;
  }
}

export default commentsReducer;
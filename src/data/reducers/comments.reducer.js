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
  commentsByRecipeId: {}
}

const commentsReducer = (state = initialState, action) => {
  const loadingStateCopy = { ...state.loadingState };
  console.log('comments reducer, action.type: ', action.type);
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
      const recipeId = action.payload[0].recipeId;
      state.commentsByRecipeId[recipeId] = {};
      action.payload.forEach(comment => {
        state.commentsByRecipeId[recipeId][comment._id] = comment;
      });

      return {
        ...state,
        loadingState: loadingStateCopy,
        commentsByRecipeId: { ...state.commentsByRecipeId }
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
      const recipeId = createdComment.recipeId;
      state.commentsByRecipeId[recipeId][createdComment._id] = createdComment;
      console.log(state);

      return {
        ...state,
        loadingState: loadingStateCopy,
        commentsByRecipeId: { 
          ...state.commentsByRecipeId, 
          [recipeId]: { 
            ...state.commentsByRecipeId[recipeId],
            [createdComment._id]: createdComment 
          }
        }
      };
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
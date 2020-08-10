import { combineReducers } from 'redux';

import recipesReducer from './recipes.reducer';
import commentsReducer from './comments.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  comments: commentsReducer
});

export default rootReducer;
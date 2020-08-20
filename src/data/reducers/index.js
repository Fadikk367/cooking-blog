import { combineReducers } from 'redux';

import recipesReducer from './recipes.reducer';
import commentsReducer from './comments.reducer';
import searchReducer from './search.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  comments: commentsReducer,
  search: searchReducer
});

export default rootReducer;
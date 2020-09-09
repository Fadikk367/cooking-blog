import { combineReducers } from 'redux';

import recipesReducer from './recipes.reducer';
import commentsReducer from './comments.reducer';
import searchReducer from './search.reducer';
import adminReducer from './admin.reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  comments: commentsReducer,
  search: searchReducer,
  admin: adminReducer,
});

export default rootReducer;
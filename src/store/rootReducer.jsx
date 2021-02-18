import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  app: appReducer,
});

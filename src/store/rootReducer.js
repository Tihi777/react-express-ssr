import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {postsReducer} from "./posts/reducer";
import {postReducer} from "./post/reducer";

export const createRootReducer = history => combineReducers({
  post: postReducer,
  posts: postsReducer,
  router: connectRouter(history),
})
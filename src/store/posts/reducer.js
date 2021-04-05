import { FETCH_POSTS_SUCCESS } from "./constants";

export const postsInitialState = {
  data: [],
  isLoading: false,
  error: undefined,
}

export const postsReducer = (posts = postsInitialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return { ...posts, data: payload };
    default:
      return posts;
  }
}
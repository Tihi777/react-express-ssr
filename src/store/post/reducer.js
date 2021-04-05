import { FETCH_POST_SUCCESS } from "./constants";

export const postsInitialState = {
  data: {},
  isLoading: false,
  error: undefined,
}

export const postReducer = (post = postsInitialState, { type, payload }) => {
  switch (type) {
    case FETCH_POST_SUCCESS:
      return { ...post, data: payload };
    default:
      return post;
  }
}
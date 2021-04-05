import fetch from 'node-fetch';
import { FETCH_POSTS_SUCCESS } from "./constants";

export const fetchPosts = () => async dispatch => {
  try {
    const res = await fetch('https://606154b6ac47190017a70b28.mockapi.io/api/v1/posts');
    const posts = await res.json();
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (e) {
    console.log(e)
  }
}
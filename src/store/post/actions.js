import fetch from 'node-fetch';
import { FETCH_POST_SUCCESS } from "./constants";

export const fetchPost = slug => async dispatch => {
  try {
    const res = await fetch(`https://606154b6ac47190017a70b28.mockapi.io/api/v1/posts/${slug}`);
    const post = await res.json();

    dispatch({ type: FETCH_POST_SUCCESS, payload: post });
  } catch (e) {
    console.log(e)
  }
}
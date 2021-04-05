import loadable from '@loadable/component';
import Routes from './routes'

import { fetchPosts } from "./store/posts/actions";
import { fetchPost } from "./store/post/actions";

const HomePage = loadable(() => import('./pages/Home/Home'));
const BlogPage = loadable(() => import('./pages/Blog/Blog'));
const PostPage = loadable(() => import('./pages/Post/Post'));

export default {
  [Routes.HOME]: {
    path: '/',
    exact: true,
    component: HomePage,
    async fetchData (dispatch) {
      await dispatch(fetchPosts());
    }
  },
  [Routes.BLOG]: {
    path: '/blog',
    component: BlogPage,
    exact: true,
    async fetchData (dispatch) {
      await dispatch(fetchPosts());
    }
  },
  [Routes.BLOG_POST]: {
    path: '/blog/:slug',
    component: PostPage,
    exact: true,
    async fetchData (dispatch, match) {
      await dispatch(fetchPost(match.params.slug));
    }
  },
}
import loadable from '@loadable/component';
import Routes from './routes'
import {testAction} from "./store/app/actions";

const HomePage = loadable(() => import('./pages/Home/Home'));
const BlogPage = loadable(() => import('./pages/Blog/Blog'));


export default {
  [Routes.HOME]: {
    path: '/',
    exact: true,
    component: HomePage,
    async fetchData (dispatch) {
      await dispatch(testAction());
    }
  },
  [Routes.BLOG]: {
    path: '/blog',
    component: BlogPage,
  },
}
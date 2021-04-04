import loadable from '@loadable/component';

const HomePage = loadable(() => import('./pages/Home/Home'));
const BlogPage = loadable(() => import('./pages/Blog/Blog'));

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/blog',
    component: BlogPage,
  },
  {
    path: '*',
    component: HomePage,
  },
]
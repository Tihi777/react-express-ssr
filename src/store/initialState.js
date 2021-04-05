import {postsInitialState} from "./posts/reducer";

export const getInitialState = (pathname = '/') => {
   return {
     posts: postsInitialState,
     router: {
       location: {pathname, search: '', hash: '', key: ''},
       action: 'POP',
     },
   }
}
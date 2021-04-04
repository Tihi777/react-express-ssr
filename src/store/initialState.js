export const getInitialState = (pathname = '/') => {
   return {
     app: {
       locale: 'ru',
     },
     router: {
       location: {pathname, search: '', hash: '', key: ''},
       action: 'POP',
     },
   }
}
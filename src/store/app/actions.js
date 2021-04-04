import fetch from 'node-fetch';

export const testAction = () => async dispatch => {
  try {
    // const fetch = new Promise(resolve => {
    //   setTimeout(() => resolve({data: 'bla bla bla bla'}), 500)
    // })
    console.log('HERE')
    const res = await fetch('https://606154b6ac47190017a70b28.mockapi.io/api/v1/posts');
    console.log(res)
    const data = await res.json();

    dispatch({ type: 'TEST', payload: data });
  } catch (e) {
    console.log(e)
  }
}
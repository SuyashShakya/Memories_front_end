import * as api from '../api';

//Action CREATORS
export const getPosts = () => async (dispatch) => {
    console.log('data')
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log('data', error)
        console.error(error.message)
    }
}
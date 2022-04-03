import * as api from '../api';

// Action Creators - functions that return actions. Actions are objects with type and payload
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        // api.updatePost returns the updated Post component, { } destructures (unpacks) the response
        const { data } = await api.updatePost(id, post);
    } catch (error) {

    }
}
export const CREATE_POST = 'CREATE_POST';
export const createPost = post => ({
    type: CREATE_POST,
    payload: post
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
});
export const UPDATE_ID = 'UPDATE_ID';
export const updateId = (id) => ({
    type: UPDATE_ID,
    payload: id
});
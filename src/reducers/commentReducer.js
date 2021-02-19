import { CREATE_COMMENT, DELETE_COMMENT, UPDATE_ID } from '../actions/commentActions';

const initialState = {
    comments: [],
    posts: [],
    commentId: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload,],

            };
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload)
            };
        case UPDATE_ID:
            return {
                ...state,
                commentId: action.payload
            };
        default:
            return state;
    }
}
import { createComment, deleteComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment reducer', () => {
    it('add a comment with CREATE_COMMENT action', () => {
        const state = {
            comments: []
        };



        const action = createComment({
            title: 'title',
            body: 'body',
            id: 1,
            postId: 1

        });

        const newState = reducer(state, action);

        expect(newState).toEqual({
            comments: [{ title: 'title', body: 'body', id: 1, postId: 1 }]
        });
    });

    it('handles the DELETE_COMMENT action', () => {
        const state = {
            comments: [{ title: 'title', body: 'body', id: 1, postId: 1 }],

        };

        const action = deleteComment(1);

        expect(reducer(state, action)).toEqual({
            comments: [],

        });
    });
});
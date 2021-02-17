import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
    it('add a post with CREATE_POST action', () => {
        const state = {
            posts: []
        };



        const action = createPost({
            title: 'title',
            body: 'body',

        });

        const newState = reducer(state, action);

        expect(newState).toEqual({
            posts: [{ title: 'title', body: 'body' }]
        });
    });

    it('handles the DELETE_POST action', () => {
        const state = {
            posts: [{ title: 'title', body: 'body' }]
        };

        const action = deletePost('title');

        expect(reducer(state, action)).toEqual({
            posts: []
        });
    });
});
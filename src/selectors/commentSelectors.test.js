import { getComments } from './commentSelectors';

describe('comments selectors', () => {
    it('select the list of comments from state', () => {
        const state = {
            comments: { comments: [{ title: 'title', body: 'body', id: 1, postId: 1 }] }
        };

        const comments = getComments(state);
        expect(comments).toEqual([{ title: 'title', body: 'body', id: 1, postId: 1 }]);
    });

});


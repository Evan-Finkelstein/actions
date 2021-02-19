import { getPosts, countPosts } from './postSelectors';

describe('post selectors', () => {
    it('select the list of posts from state', () => {
        const state = {
            posts: [{ title: 'title', body: 'body' }]
        };

        const posts = getPosts(state);

        expect(posts).toEqual([{ title: 'title', body: 'body' }]);
    });

});


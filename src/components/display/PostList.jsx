import React from 'react';
import { useSelector } from '../../state/PostProvider';
import { getPosts } from '../../selectors/postSelectors';
import PostItem from './PostItem';

const PostList = () => {
    const posts = useSelector(getPosts);

    const postElements = posts.map(post => (
        <li key={post.title}>
            <PostItem {...post} />
        </li>
    ));

    return (
        <div>
            {postElements}
        </div>
    );
};

export default PostList;

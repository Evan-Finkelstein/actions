import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/postSelectors';
import PostItem from './PostItem';

const PostList = () => {
    const posts = useSelector(getPosts);

    const postElements = posts.map(post => (
        <li key={post.id}>
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

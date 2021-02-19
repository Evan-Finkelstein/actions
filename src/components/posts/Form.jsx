import React, { useState } from 'react';
import { createPost, updateId } from '../../actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { getPostId } from '../../selectors/postSelectors';

const PostForm = () => {
    const dispatch = useDispatch();
    const postId = useSelector(getPostId)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        const id = postId + 1
        event.preventDefault();
        dispatch(updateId(id));
        dispatch(createPost({ title, body, id }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
            />

            <input
                type="text"
                placeholder="Body"
                value={body}
                onChange={({ target }) => setBody(target.value)}
            />

            <button>Create Post</button>
        </form>
    );
};

export default PostForm;
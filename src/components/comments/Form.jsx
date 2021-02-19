import React, { useState } from 'react';
import { createComment, updateId } from '../../actions/commentActions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentId } from '../../selectors/commentSelectors'

const CommentForm = () => {
    const commentId = useSelector(getCommentId)
    const dispatch = useDispatch();
    const paramId = useParams()
    const postId = paramId.id
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const id = commentId + 1
        dispatch(updateId(id));
        dispatch(createComment({ title, body, postId, id }));
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

            <button>Create Comment</button>
        </form>
    );
};

export default CommentForm;
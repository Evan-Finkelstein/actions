import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

const CommentItem = ({ title, body, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteComment(id));
    };

    return (
        <>
            <div>
                <p>{title}</p>
                <p>{body}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

CommentItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default CommentItem;
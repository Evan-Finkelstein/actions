
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/PostProvider';
import { deletePost } from '../../actions/postActions';

const PostItem = ({ title, body }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(title));
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

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default PostItem;
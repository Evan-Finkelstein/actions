
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { Link } from 'react-router-dom';

const PostItem = ({ title, body, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(id));
    };

    return (
        <>
            <Link to={`/posts/${id}`}><div>
                <p>{title}</p>
                <p>{body}</p>
            </div></Link>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default PostItem;
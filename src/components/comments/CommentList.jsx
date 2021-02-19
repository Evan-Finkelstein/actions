import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments } from '../../selectors/commentSelectors';
import CommentItem from './CommentItem';

const CommentList = () => {
    const paramId = useParams()
    const postId = paramId.id
    console.log(postId)
    const allComments = useSelector(getComments).filter(comment => comment.postId === postId)
    console.log(allComments)
    // const postComments = allComments.filter(comment => comment.postId === postId)
    // console.log(postComments)
    const commentElements = allComments.map(comment => (
        <li key={comment.id}>
            <CommentItem {...comment} />
        </li>
    ));

    return (
        <div>
            {commentElements}
        </div>
    );
};

export default CommentList;

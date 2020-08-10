import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Comment } from './CommentsList.css';

import { fetchCommentsByRecipeId } from '../../../../data/actions';


const CommentsList = ({ commentIds = [], commentsMap = {}, recipeId, fetchCommentsByRecipeId }) => {
  const [comments, setComments] = useState({});
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    console.log(!commentsMap[recipeId]);
    if (!commentsMap[recipeId]) {
      console.log('calling fetch comments action');
      fetchCommentsByRecipeId(recipeId);
    } else {
      setComments(commentsMap[recipeId]);
      setReadyToRender(true);
    }
  }, [commentsMap, recipeId, fetchCommentsByRecipeId]);

  const renderedComments = [];

  const renderComments = (renderedComments, commentIds, indenation = 0) => {
    commentIds.forEach(commentId => {
      const comment = comments[commentId];

      renderedComments.push((
        <Comment indenation={indenation}>
          <h3>{comment.author}</h3>
          <p>{comment.content}</p>
        </Comment>
      ));

      if (comment.answers.length) {
        renderComments(renderedComments, comment.answers, indenation + 1);
      }
    });
  }

  console.log(commentIds);
  console.log(comments);


  const x = readyToRender ? renderComments(renderedComments, commentIds) : null;

  // console.log(renderedComments);

  return (
    <div>
      Comments
      {renderedComments}
    </div>
  )
}


export default connect(
  state => ({ commentsMap: state.comments.commentsByRecipeId }),
  { fetchCommentsByRecipeId }
)(CommentsList);
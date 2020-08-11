import React, { useState, useEffect } from 'react';

import { AddCommentForm, Comment } from 'pages/RecipePage/components';
import { CommentListContainer, ReplyFormButton } from './CommentList.css';

const CommentList = ({ recipeId, parentCommentId = null, indentLevel = 0, comments, isOpen = false }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const renderedComments = comments.map(comment => (
    <Comment key={comment._id} {...comment} indentLevel={indentLevel}/> 
  ))
  return isOpen ? (
    <CommentListContainer isOpen={isOpen} indentLevel={indentLevel} style={isOpen ? { display: 'block' } : { display: 'none' }}>
      {renderedComments}
      {showReplyForm ? <AddCommentForm recipeId={recipeId} parentCommentId={parentCommentId} comments={comments}/> : <ReplyFormButton onClick={() => setShowReplyForm(true)}>Dodaj komentarz</ReplyFormButton>}
    </CommentListContainer>
  ) : null;
}


export default CommentList;
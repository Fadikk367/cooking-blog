import React, { useState, useRef } from 'react';
import axios from 'axios';

import { CommentContainer, CommentHeader, CommentBody, CommentControlBar } from './Comment.css';
import { CommentList } from 'pages/RecipePage/components';

const Comment = ({ recipeId, _id, date, author, content, answers = [], indentLevel = 0, parentCommentId = null }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [comments, setComments] = useState([]);
  const addCommentFormRef = useRef(null);

  const fetchAnswersToComment = async (commentId) => {
    const response = await axios.get(`http://localhost:4000/comments/${commentId}/answers`);

    await setComments(await response.data);
  }

  const handleToggleAnswers = async () => {
    await fetchAnswersToComment(_id);
    setShowAnswers(prev => !prev);
  }

  const handleAnswerToComment = async () => {
    await fetchAnswersToComment(_id);
    setShowAnswers(true);
  }

  return (
    <>
      <CommentContainer>
        <CommentHeader>
          <span className="comment-author">{author}</span>
          <span className="comment-date">{date}</span>
        </CommentHeader>
        <CommentBody>
          {content}
        </CommentBody>
        <CommentControlBar>
          <button className="answer-btn" onClick={handleAnswerToComment}>odpowiedz</button>
          <button className="toggle-answers-btn" onClick={handleToggleAnswers}>{showAnswers ? 'ukryj odpowiedzi' : `pokaż odpowiedzi (${answers.length})`}</button>
          <button className="like-btn">+1</button>
        </CommentControlBar>
        </CommentContainer>
          {showAnswers ? <CommentList 
          addCommentFormRef={addCommentFormRef}
          isOpen={showAnswers} 
          recipeId={recipeId}
          parentCommentId={_id} 
          indentLevel={indentLevel + 1} 
          comments={comments}
          /> : null}
    </>
  );
}


export default Comment;
import React, { useState, useRef } from 'react';
import axios from 'axios';

import { CommentContainer, CommentHeader, CommentBody, CommentControlBar, ReactionIcon, ReactionBtn, ReactionCounter } from './Comment.css';
import { CommentList } from 'pages/RecipePage/components';

import thumbsUpIcon from 'svgs/thumbup.svg';
import heartIcon from 'svgs/heart.svg';
import wowIcon from 'svgs/wow.svg';


const Comment = ({ commentData, indentLevel = 0 }) => {
  const { recipeId, _id, date, author, content, answers } = commentData;
  console.log(commentData);
  const [showAnswers, setShowAnswers] = useState(false);
  const [comments, setComments] = useState([]);
  // const [likes, setLikes] = useState(reactions.likes);
  // const [hearts, setHearts] = useState(reactions.hearts);
  // const [wows, setWows] = useState(reactions.wows);
  const [reactions, setReactions] = useState(commentData.reactions);
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

  const handleAddReaction = e => {
    const reaction = e.target.name;
    const existingReaction = window.localStorage.getItem(_id);

    if (existingReaction === reaction) {
      console.log('same reaction');
      return;
    } else if (!existingReaction) {
      console.log('no reaction yet');
      window.localStorage.setItem(_id, reaction);
      fetch(`http://localhost:4000/comments/${_id}/reaction/${reaction}`, {
        method: 'PUT',
      });
    }
    else {
      console.log('change reaction');
      fetch(`http://localhost:4000/comments/${_id}/reaction/change?from=${existingReaction}&to=${reaction}`, {
        method: 'PUT',
      });
      console.log({ next: {
        ...reactions,
        [existingReaction]: reactions[existingReaction] - 1,
        [reaction]: reactions[reaction] + 1,
      }, prev: reactions});
      setReactions({
        ...reactions,
        [existingReaction]: reactions[existingReaction] - 1,
        [reaction]: reactions[reaction] + 1,
      });
      window.localStorage.setItem(_id, reaction);
    }
    
    window.localStorage.setItem(_id, reaction);
    setReactions({
      ...reactions,
      [reaction]: reactions[reaction] + 1,
    })
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
          <ReactionBtn>
            <ReactionIcon src={thumbsUpIcon}  name='likes' onClick={handleAddReaction}/>
            <ReactionCounter>{reactions.likes}</ReactionCounter>
          </ReactionBtn>
          <ReactionBtn>
            <ReactionIcon src={heartIcon}  name='hearts' onClick={handleAddReaction}/>
            <ReactionCounter>{reactions.hearts}</ReactionCounter>
          </ReactionBtn>
          <ReactionBtn>
            <ReactionIcon src={wowIcon}  name='wows' onClick={handleAddReaction}/>
            <ReactionCounter>{reactions.wows}</ReactionCounter>
          </ReactionBtn>
        </CommentControlBar>
        </CommentContainer>
          {showAnswers 
          ? <CommentList 
              addCommentFormRef={addCommentFormRef}
              isOpen={showAnswers} 
              recipeId={recipeId}
              parentCommentId={_id} 
              indentLevel={indentLevel + 1} 
              comments={comments}
            /> 
          : null}
    </>
  );
}


export default Comment;
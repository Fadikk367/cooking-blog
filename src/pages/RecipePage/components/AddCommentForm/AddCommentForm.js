import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addComment } from 'data/actions';
import { CommentFormContainer } from './AddCommentForm.css';


const AddCommentForm = ({ addComment, recipeId, parentCommentId = null }) => {
  const [author, setAuthor] = useState(getUserNickname());
  const [content, setContent] = useState('');

  function getUserNickname() {
    const user = window.localStorage.getItem('nickname');
    return user || '';
  }

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!author) return;

    const nickname = window.localStorage.getItem('nickname');
    if (!nickname || nickname !== author)
      window.localStorage.setItem('nickname', author);

    addComment({ recipeId, author, content, parentCommentId });
  }

  return (
    <CommentFormContainer>
      <form onSubmit={handleAddComment}>
        <input type="text" value={author} name="pseudonim" placeholder="nickname" onChange={(e) => setAuthor(e.target.value)}/>
        <textarea type="text" value={content} name="content" placeholder="comment..." onChange={(e) => setContent(e.target.value)}/>
        <button type="submit">Dodaj</button>
      </form>
    </CommentFormContainer>
  )
}

AddCommentForm.propTypes = {
  addCOmment: PropTypes.func,
  recipeId: PropTypes.string
};

export default connect(null, { addComment })(AddCommentForm);
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Comment } from '../CommentsSection/CommentsList.css';

import { addComment } from '../../../../data/actions';


const AddCommentForm = ({ addComment, recipeId, parentComemntId = null }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    console.log({ recipeId, author, content, parentComemntId });
    addComment({ recipeId, author, content, parentComemntId });
  }

  return (
    <Comment>
      <form onSubmit={handleAddComment}>
        <input type="text" value={author} placeholder="nickname" onChange={(e) => setAuthor(e.target.value)}/>
        <textarea type="text" value={content} placeholder="comment..." onChange={(e) => setContent(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </Comment>
  )
}

AddCommentForm.propTypes = {
  addCOmment: PropTypes.func,
  recipeId: PropTypes.string
};

export default connect(null, { addComment })(AddCommentForm);
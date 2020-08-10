import React from 'react';
import { Comment } from './CommentsList.css';


const CommentsList = ({ comments = [] }) => {

  console.log(comments);
  const renderedComments = [];

  const renderComments = (renderedComments, comments, indenation = 0) => {
    comments.forEach(comment => {
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

  console.log(renderComments(renderedComments, comments));

  return (
    <div>
      Comments
      {renderedComments}
    </div>
  )
}


export default CommentsList;
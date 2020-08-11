import axios from 'axios';
import { COMMENTS_GET, COMMENT_ADD } from '../constants';


export const fetchCommentsByRecipeId = recipeId => {
  const promise = axios.get(`${recipeId}/comments`);

  return {
    promise,
    type: COMMENTS_GET
  };
}

export const addComment = ({ recipeId, author, content, parentCommentId = null }) => {
  const promise = axios.post(`${recipeId}/comments`, {
    recipeId,
    author,
    content,
    parentCommentId
  });

  return {
    promise,
    type: COMMENT_ADD
  };
}
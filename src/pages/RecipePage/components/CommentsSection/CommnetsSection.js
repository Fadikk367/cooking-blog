import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import { LoadingIndicator } from 'components';
import { AddCommentForm, CommentList } from 'pages/RecipePage/components';
import { CommentsSectionContainer, CommentsSectionHeader } from './CommentsSection.css';

import { fetchCommentsByRecipeId } from 'data/actions';


const CommentsSection = ({ recipeId, fetchCommentsByRecipeId, comments, commentsState, commentsIds = [] }) => {

  useEffect(() => {
      fetchCommentsByRecipeId(recipeId);
  }, [recipeId, fetchCommentsByRecipeId]);

  const isLoaded = useMemo(() => {
    return (commentsState && Object.keys(commentsState).length === 0);
  }, [commentsState])


  return (
    <CommentsSectionContainer>
      {/* <CommentsSectionHeader>Dodaj komentarz:</CommentsSectionHeader>
      <AddCommentForm recipeId={recipeId}/> */}
      <CommentsSectionHeader>Komentarze: ({ commentsIds.length })</CommentsSectionHeader>
      { isLoaded ? <CommentList recipeId={recipeId} comments={comments} indentLevel={0} isOpen={true}/> : <LoadingIndicator />}
    </CommentsSectionContainer>
  )
}


export default connect(
  state => ({ 
    commentsState: state.comments.loadingState,
    comments: state.comments.comments
  }), { 
    fetchCommentsByRecipeId 
  }
)(CommentsSection);
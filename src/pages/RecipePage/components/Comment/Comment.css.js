import styled from 'styled-components';

export const CommentContainer = styled.li`
  padding: 1rem;
  margin-bottom: 10px;
  border-radius: 20px;
  background: rgb(222, 222, 222);
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .comment-author {
    font-size: 1.3em;
    font-weight: 500;
  }

  .comment-date {
    font-size: 1.1em;
    font-weight: 300;
    color: gray;
  }
`;

export const CommentBody = styled.div`
  text-align: justify;
  text-justify: inter-word;
  padding: 1rem 0;
  font-size: 1.2em;
`;

export const CommentControlBar = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: lightgray;

  .toggle-answers-btn, .answer-btn, .like-btn {
    padding: 0.2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    color: rgb(20, 13, 120);
    background: white;
    font-weight: 500;
    cursor: pointer;
  }

  .like-btn {
    justify-self: flex-end;
  }

  .toggle-answers-btn {
    width: 200px;
  }
`;
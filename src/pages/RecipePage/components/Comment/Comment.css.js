import styled from 'styled-components';

export const CommentContainer = styled.li`
  padding: 1rem;
  margin-bottom: 15px;
  border-radius: 5px;
  background: white;
  box-shadow: 5px 5px 10px -3px rgba(97,97,97,1);
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid black;

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
  padding-top: 3px;
  border-top: 1px solid black;

  .reactions {
    /* justify-self: flex-end; */
    display: flex;
    margin-left: auto;
  }

  .toggle-answers-btn, .answer-btn {
    background-color: lightgrey;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 1.1em;
    color: rgb(20, 13, 120);
    font-weight: 500;
    cursor: pointer;
  }
`;




export const ReactionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

export const ReactionIcon = styled.img`
  display: inline-block;
  width: 30px;
  padding: 7px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(-7deg);
  }
`;

export const ReactionCounter = styled.span`
  font-weight: ${props => props.isChoosen ? '500' : '300'};
`;
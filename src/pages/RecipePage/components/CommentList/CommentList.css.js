import styled from 'styled-components';

export const CommentListContainer = styled.ul`
  margin-left: ${props => `${props.indentLevel*2}rem`};
  display: ${props => props.isOpen ? 'block' : 'none'};
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ReplyFormButton = styled.button`
  background: orange;
  font-size: 1.3rem;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px 15px;
`;
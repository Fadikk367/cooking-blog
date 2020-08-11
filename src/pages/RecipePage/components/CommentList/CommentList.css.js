import styled from 'styled-components';

export const CommentListContainer = styled.ul`
  margin-left: ${props => `${props.indentLevel*2}rem`};
  display: ${props => props.isOpen ? 'block' : 'none'};
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export const ReplyFormButton = styled.button`
  background: white;
  font-size: 1.3rem;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0.3rem;
  margin-bottom: 20px;
`;
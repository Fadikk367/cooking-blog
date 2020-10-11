import styled from 'styled-components';

export const NewsletterForm = styled.form`
  display: flex;
`;

export const EmailInput = styled.input`
font-size: 1em;
padding: 16px;
border: none;
outline: none;
border-top-left-radius: 3px;
background-color: #636363;
color: white;
border-bottom-left-radius: 3px;

&::placeholder {
  color: white;
}
`;

export const SubscribeButton = styled.button`
font-size: 1em;
border: none;
outline: none;
padding: 16px;
border-top-right-radius: 3px;
border-bottom-right-radius: 3px;
background-color: #d19e1b;
color: white;
cursor: pointer;
`;
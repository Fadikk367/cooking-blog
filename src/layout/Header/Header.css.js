import styled from 'styled-components';


export const HeaderWrapper = styled.header`
  /* background-image: url('http://localhost:3000/images/bg3.jpeg'); */
  background-image: url('https://fadikktestbucket.s3.eu-central-1.amazonaws.com/assets/bg3.jpeg');
  /* background-size: 1000px 600px; */
  background-size: cover;
  background-repeat: repeat-x;
  padding: 0 20px;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;


export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const TitleText = styled.h1`
  font-family: 'Kalam', cursive;
  /* margin: 2rem; */
  padding: 0.7rem;
  border-bottom: 3px solid white;
  text-align: center;
  font-size: 4em;
  color: white;
  text-shadow: 2px 2px black;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const TitleLogo = styled.img`
  transform: rotate(-13deg);
  display: block;
  width: 100px;
  filter: drop-shadow(-2px -2px 7px black);
`;  
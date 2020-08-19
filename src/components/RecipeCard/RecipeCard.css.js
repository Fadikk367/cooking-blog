import styled from 'styled-components';

export const RecipeCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  background: #f7f7f7;
  height: 100%;
  text-decoration: none;
  color: black;
  overflow: hidden;

  -webkit-box-shadow: 10px 10px 17px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 17px -6px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 17px -6px rgba(0,0,0,0.75);


`;

export const RecipeTopBox = styled.div`
  display: flex;
  position: relative;

  div.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      padding: 15px;
      border: 3px solid white;

      text-align: center;
      letter-spacing: 2px;
      color: white;
      font-size: 1.2em;
      font-weight: 500;

      
    }
  }

  &:hover div.overlay {
    opacity: 1;
    visibility: visible;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ImageThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img { 
    flex-shrink: 0;
    width: 100%;
    transition: all 0.6s ease-in-out;
  }
`;


export const RecipeBotttomBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 20px 20px 10px 20px;
`;

export const RecipeCardTitle = styled.h3`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.4em;
  margin: 0;
  padding: 7px;
  border-radius: 3px;
  background: orange;
`;

export const RecipeCardDescription = styled.p`
text-decoration: none;
  flex-grow: 1;
  padding: 20px 0;
  font-weight: 400;
  font-size: 1.2em;
  border-bottom: 1px solid black;
  margin:0;
`;

export const RecipeCardFooter = styled.div`
  text-decoration: none;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30px;
      padding: 5px;
      transition: transform 0.4s ease-in-out;
    }

    img:hover {
      transform: scale(1.2) rotate(7deg);
    }

    span {
      padding: 5px;
    }
  }
`;

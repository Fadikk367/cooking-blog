import React from 'react';
import { 
  RecipeCardWrapper, 
  RecipeTopBox, 
  RecipeBotttomBox, 
  ImageThumbnailBox, 
  RecipeCardFooter,
  RecipeCardTitle,
  RecipeCardDescription
} from './RecipeCard.css';


import image from 'images/test-image-1.jpg';

import heartIcon from 'svgs/heart.svg';
// import commentIcon from 'svgs/comment.svg';
// import shareIcon from 'svgs/share.svg';


const RecipeCard = ({ title, content, date, difficulty }) => {
  const tIndex = date.indexOf('T');
  const d = date.substr(0, tIndex);
  return (
    <RecipeCardWrapper>
      <RecipeTopBox>
        <ImageThumbnailBox>
          <img src={image} alt=""/>
          <div className="overlay">
            <span>WYŚWIETL PRZEPIS</span>
          </div>
        </ImageThumbnailBox>
      </RecipeTopBox>
      <RecipeBotttomBox>
        <RecipeCardTitle>
          {title}
        </RecipeCardTitle>
        <RecipeCardDescription>
        {content}
        </RecipeCardDescription>
        <RecipeCardFooter>
          <div>
            <img src={heartIcon} alt=""/>
            <span>1341</span>
          </div>
          <span>{d}</span>
        </RecipeCardFooter>
      </RecipeBotttomBox>
    </RecipeCardWrapper>
  )
}

export default RecipeCard;
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { 
  RecipeCardWrapper, 
  RecipeTopBox, 
  RecipeBotttomBox, 
  ImageThumbnailBox, 
  RecipeCardFooter,
  RecipeCardTitle,
  RecipeCardDescription,
  AdminControls
} from './RecipeCard.css';


import image from 'images/test-image-1.jpg';

import heartIcon from 'svgs/heart.svg';
import pencilIcon from 'svgs/pencil.svg';
import crossIcon from 'svgs/x-circle.svg';


const RecipeCard = ({ title, content, date, difficulty, _id }) => {
  const isAdmin = useSelector(state => state.admin.auth.isAuthentificated);
  const tIndex = date.indexOf('T');
  const d = date.substr(0, tIndex);
  return (
    <RecipeCardWrapper>
      <RecipeTopBox>
        <ImageThumbnailBox>
          <img src={image} alt=""/>
        </ImageThumbnailBox>
        <div className="overlay">
            <span>WYŚWIETL PRZEPIS</span>
            {isAdmin 
            ? (
              <AdminControls>
                <Link to={`/admin/recipes/${_id}/edit`}><img src={pencilIcon} alt=""/></Link>
                <Link to={`/admin/recipes/${_id}/delete`}><img src={crossIcon} alt=""/></Link>
              </AdminControls>
            ) : null}
          </div>
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
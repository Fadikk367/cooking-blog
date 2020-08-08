import React from 'react';

const RecipeCard = ({ title, content, date, difficulty }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <span>{difficulty}</span>
      <span>{date}</span>
    </article>
  )
}

export default RecipeCard;
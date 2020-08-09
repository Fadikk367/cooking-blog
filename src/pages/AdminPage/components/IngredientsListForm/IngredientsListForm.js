import React, { useState } from 'react';

import { IngredientListTitle, IngredientItem, IngredientInput } from './IngredientsListForm.css';


const IngredientsListForm = ({ items = [], handleAddIngredient, handleRemoveIngredient }) => {
  const [newIngredient, setNewIngredient] = useState('');


  const handleAddIngredientClick = e => {
    e.preventDefault();
    e.stopPropagation();

    handleAddIngredient(newIngredient);
    setNewIngredient('');
  }

  const renderedIngredients = items.map(ingredient => (
    <IngredientItem key={ingredient}>
      {ingredient}<div className="remove-btn" onClick={() => handleRemoveIngredient(ingredient)}> x </div></IngredientItem>
    )
  );

  return (
    <div>
      <IngredientListTitle>Lista składników:</IngredientListTitle>
      <ul>
        {renderedIngredients}
        <IngredientItem>
          <form onSubmit={handleAddIngredientClick}>
            <IngredientInput value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)}/>
            <button type="submit"> + </button>
          </form>
        </IngredientItem>
      </ul>
    </div>
  );
}


export default IngredientsListForm;
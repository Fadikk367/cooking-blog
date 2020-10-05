import React, { useState, useMemo } from 'react';

import { ListWrapper, ListHeader, ListTitle, List, ListItem } from './IngredientList.css';
import { Fraction } from 'components';


const IngredientList = ({ title, ingredients = [] }) => {
  const [portions, setPortions] = useState(1);

  const listItems = ingredients.map(ingredient => (
    <ListItem 
      key={ingredient.name}
    >
      {ingredient.name} - <Fraction quantityString={ingredient.quantity} multiplier={portions}/> {ingredient.unit}
    </ListItem>
  ));

  return (
    <ListWrapper> 
      <ListHeader>
        <ListTitle>{title}</ListTitle>
        <div>
          Porcje: 
          <button onClick={() => setPortions(Math.max(portions - 1, 1))}>-</button> 
          <span>{portions}</span>
          <button onClick={() => setPortions(Math.min(portions + 1, 20))}>+</button>
        </div>
      </ListHeader>
      <List>
        {listItems}
      </List>
    </ListWrapper>
  )
}

export default IngredientList;
import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { ControllerWrapper, ElementControls } from 'components';
import { 
  ListItem,
  ListTitle,
  UnitSelect,
  QuantityInput,
} from './ListController.css';

import { updateRecipeElementData } from '../../../../data/actions/admin.actions';


const ListController = ({ id, updateRecipeElementData }) => {
  const [listTitle, setListTitle] = useState('');
  const [listItems, setListItems] = useState(['marchew', 'coconut', 'pomidor']);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('');
  const [ingredientQuantity, setIngredientQuantity] = useState(1);
  console.log(listItems);

  const handleElementUpdate = id => {
    const update = {
      title: listTitle,
      items: listItems
    };
    updateRecipeElementData(id, update);
  }

  const handleAddItem = () => {
    if (ingredientName && ingredientUnit && ingredientQuantity) {
      const newItems = [...listItems, {
        name: ingredientName,
        quantity: ingredientQuantity,
        unit: ingredientUnit,
      }];
      const update = {
        title: listTitle,
        items: newItems
      };

      setListItems(newItems);
      setIngredientName('');
      setIngredientQuantity(1);
      updateRecipeElementData(id, update);
    }
  }

  const renderedListItems = useMemo(() => {
    const handleDeleteItem = (itemName) => {
      const newItems = listItems.filter(item => item !== itemName);
      const update = {
        title: listTitle,
        items: newItems
      };
  
      setListItems(newItems);
      updateRecipeElementData(id, update);
    };

    return listItems.map(item => (
      <ListItem key={item.name}>
        {item.name} - {item.quantity} {item.unit}
        <button onClick={() => handleDeleteItem(item)}>x</button>
      </ListItem>
    ))
  }, [listItems, setListItems, updateRecipeElementData, id, listTitle]);


  return (
    <ControllerWrapper>
      <ElementControls id={id} />
      <div className="content">
        <ListTitle 
          type="text" 
          value={listTitle} 
          onChange={e => setListTitle(e.target.value)} 
          placeholder='list title...'
          onBlur={() => handleElementUpdate(id)}
        />
      <ul>
        {renderedListItems}
        <ListItem isInput={true}>
          <input type="text" value={ingredientName} onChange={e => setIngredientName(e.target.value)} placeholder='składnik'/>
          <QuantityInput 
            type="number" 
            placeholder='ilość'
            value={ingredientQuantity}
            onChange={e => setIngredientQuantity(e.target.value)}
          />
          <UnitSelect  
            value={ingredientUnit} 
            onChange={e => setIngredientUnit(e.target.value)}
            name='unit'
          >
            <option value="szt.">sztuk</option>
            <option value="ml">ml</option>
            <option value="g">g</option>
            <option value="dag">dag</option>
            <option value="szkl">szklanek.</option>
            <option value="łyżek">łyżek</option>
            <option value="łyżeczek">łyżeczek</option>
          </UnitSelect>
          <button onClick={handleAddItem}>+</button>
        </ListItem>
      </ul>
      </div>
    </ControllerWrapper>
  )
}


export default connect(null, { updateRecipeElementData })(ListController);
import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { ControllerWrapper, ElementControls, Fraction } from 'components';
import { 
  ListItem,
  ListTitle,
  UnitSelect,
  QuantityInput,
} from './ListController.css';

import { updateRecipeElementData } from '../../../../data/actions/admin.actions';
import { IngredientUnits } from 'utils/elementTypes';


const ListController = ({ id, updateRecipeElementData }) => {
  const [listTitle, setListTitle] = useState('');
  const [listItems, setListItems] = useState([{ name: 'marchew', unit: 'szt.', quantity: '3'}, { name: 'kokos', unit: 'g', quantity: '150'}, { name: 'wołowina', unit: 'kg', quantity: '2'}]);
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

  const renderedUnitOptions = Object.values(IngredientUnits).map(unitOption => (
    <option key={unitOption} value={unitOption}>{unitOption}</option>
  ))


  return (
    <ControllerWrapper>
      <ElementControls id={id} /><br /><br />
      {<Fraction quantityString='2 2/5' multiplier={5}/>}<br /><br />
      {<Fraction quantityString='0 1/7' multiplier={3}/>}<br /><br />
      {<Fraction quantityString='4 2/3'/>}<br /><br />
      {<Fraction quantityString='6/2'/>}<br /><br />
      <div className="content">
        <ListTitle 
          type="text" 
          value={listTitle} 
          onChange={e => setListTitle(e.target.value)} 
          placeholder='list title...'
          onBlur={() => handleElementUpdate(id)}
        />
        <ul>
          {<Fraction quantityString='2 2/3'/>}
          {renderedListItems}
          <ListItem isInput={true}>
            <input type="text" value={ingredientName} onChange={e => setIngredientName(e.target.value)} placeholder='składnik'/>
            <QuantityInput 
              type="number" 
              placeholder='ilość...'
              value={ingredientQuantity}
              onChange={e => setIngredientQuantity(e.target.value)}
            />
            <UnitSelect  
              value={ingredientUnit} 
              onChange={e => setIngredientUnit(e.target.value)}
              name='unit'
            >
              {renderedUnitOptions}
            </UnitSelect>
            <button onClick={handleAddItem}>+</button>
          </ListItem>
        </ul>
      </div>
    </ControllerWrapper>
  )
}


export default connect(null, { updateRecipeElementData })(ListController);
import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { ControllerWrapper, ElementControls, Fraction } from 'components';
import { 
  ListItem,
  ListTitle,
  List,
  UnitSelect,
  QuantityInput,
} from './ListController.css';

import { updateRecipeElementData } from '../../../../data/actions/admin.actions';
import { IngredientUnits } from 'utils/elementTypes';


const ListController = ({ id, updateRecipeElementData }) => {
  const [listTitle, setListTitle] = useState('');
  const [listItems, setListItems] = useState([{ name: 'marchew', unit: 'szt.', quantity: '3'}, { name: 'kokos', unit: 'g', quantity: '150'}, { name: 'wołowina', unit: 'kg', quantity: '2'}]);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('kg');
  const [ingredientQuantity, setIngredientQuantity] = useState('1');
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
      setIngredientQuantity('1');
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
        {`${item.name} -  `} <Fraction quantityString={item.quantity}/> {item.unit}
        <button onClick={() => handleDeleteItem(item)}>x</button>
      </ListItem>
    ))
  }, [listItems, setListItems, updateRecipeElementData, id, listTitle]);

  const renderedUnitOptions = Object.values(IngredientUnits).map(unitOption => (
    <option key={unitOption} value={unitOption}>{unitOption}</option>
  ))


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
        <List>
          {renderedListItems}
          <ListItem isInput={true}>
            <input type="text" value={ingredientName} onChange={e => setIngredientName(e.target.value)} placeholder='składnik'/>
            <span style={{ paddingRight: '5px' }}> - </span>
            <QuantityInput 
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
        </List>
      </div>
    </ControllerWrapper>
  )
}


export default connect(null, { updateRecipeElementData })(ListController);
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { 
  ListControllerWrapper,
  Controls,
  ControlButton,
  ButtonIcon,
  ListItem,
  ListTitle
} from './ListController.css';

import { updateRecipeElementData } from '../../../../data/actions/admin.actions';
import deleteIcon from '../../../../svgs/bin.svg'
import arrowUp from '../../../../svgs/arrow-up.svg'
import arrowDown from '../../../../svgs/arrow-down.svg'

const ListController = ({ updateRecipeElementData, id, handleDeleteElement }) => {
  const [listTitle, setListTitle] = useState('');
  const [listItems, setListItems] = useState(['marchew', 'coconut', 'pomidor']);
  const [currentItem, setCurrentItem] = useState('');
  console.log(listItems);

  const handleElementUpdate = id => {
    const update = {
      title: listTitle,
      items: listItems
    };
    updateRecipeElementData(id, update);
  }

  const handleAddItem = () => {
    if (currentItem) {
      const newItems = [...listItems, currentItem];
      const update = {
        title: listTitle,
        items: newItems
      };

      setListItems(newItems);
      setCurrentItem('');
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
      <ListItem key={item}>{item}<button onClick={() => handleDeleteItem(item)}>x</button></ListItem>
    ))
  }, [listItems, setListItems, updateRecipeElementData, id, listTitle]);


  return (
    <ListControllerWrapper>
      <Controls>
        <ControlButton><ButtonIcon src={arrowUp}/></ControlButton>
        <ControlButton><ButtonIcon src={arrowDown}/></ControlButton>
        <ControlButton onClick={() => handleDeleteElement(id)}><ButtonIcon src={deleteIcon}/></ControlButton>
      </Controls>
      <div className="content">
      <ListTitle 
        type="text" 
        value={listTitle} 
        onChange={e => setListTitle(e.target.value)} 
        placeholder='title...'
        onBlur={() => handleElementUpdate(id)}
      />
      <ul>
        {renderedListItems}
        <ListItem isInput={true}>
          <input type="text" value={currentItem} onChange={e => setCurrentItem(e.target.value)}/>
          <button onClick={handleAddItem}>+</button>
        </ListItem>
      </ul>
      </div>
    </ListControllerWrapper>
  )
}


export default connect(null, { updateRecipeElementData })(ListController);
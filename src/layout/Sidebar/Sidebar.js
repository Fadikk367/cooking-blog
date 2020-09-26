import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { SidebarWrapper } from './Siderbar.css';
import { Element } from '../../utils/elementTypes';

import { createRecipeElementData } from '../../data/actions/admin.actions';


const Sidebar = ({ sidebarRef, createRecipeElementData, elements = [] }) => {
  const [elementCount, setElementCount] = useState(0);

  const createRecipeElement = (type, index = elements.length) => {
    console.log({ type, index });
    switch(type) {
      case Element.PARAGRAPH: {
        const elementId = `p-${elementCount}`
        createRecipeElementData(Element.PARAGRAPH, elementId, index);
        break;
      }
      case Element.PHOTO: {
        const elementId = `img-${elementCount}`;
        createRecipeElementData(Element.PHOTO, elementId, index);
        break;
      }
      case Element.LIST: {
        const elementId = `ul-${elementCount}`;
        createRecipeElementData(Element.LIST, elementId, index);
        break;
      }
      case Element.HEADER: {
        const elementId = `h-${elementCount}`;
        createRecipeElementData(Element.HEADER, elementId, index);
        break;
      }
      default:
        return;
    }
    setElementCount(prev => prev + 1);
  }

  return(
    <SidebarWrapper ref={sidebarRef}>
      <Switch>
        <Route exact path='/admin'>
          <button onClick={() => createRecipeElement(Element.PARAGRAPH)}>add paragraph</button>
          <button onClick={() => createRecipeElement(Element.PHOTO)}>add photo</button>
          <button onClick={() => createRecipeElement(Element.LIST)}>add list</button>
          <button onClick={() => createRecipeElement(Element.HEADER)}>add header</button>
        </Route>
        <Route path="/*" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit autem illo voluptatem aperiam saepe! Vero minima quam, dolore fuga earum id dicta natus quos laudantium atque voluptatum, rerum at magnam, sapiente aut blanditiis corporis perspiciatis ipsum! Voluptates impedit sint tenetur molestiae nesciunt rerum quasi similique neque fugiat aliquam, magnam animi illum nobis ad reiciendis. Unde, laudantium? Tempore ipsum earum, dolor non magnam laborum, delectus inventore blanditiis natus cum, voluptates odit sint optio officia saepe rerum possimus ad omnis. Magni voluptatem delectus dolore reiciendis exercitationem laudantium nesciunt, magnam repellendus in ipsum sunt commodi doloribus nisi. Assumenda dicta natus recusandae magnam.
        </Route>
      </Switch>
    </SidebarWrapper>
  );
}


export default connect(state => ({
  elements: Object.values(state.admin.recipe.elements)
}), {
  createRecipeElementData,
})(Sidebar);
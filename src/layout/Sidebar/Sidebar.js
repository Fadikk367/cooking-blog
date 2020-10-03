import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SidebarWrapper, SidebarContent } from './Siderbar.css';
import { ElementSelectionPanel } from './components';


const Sidebar = ({ sidebarRef }) => {
  return(
    <SidebarWrapper>
      <SidebarContent ref={sidebarRef}>
        <Switch>
          <Route exact path='/admin'>
            <ElementSelectionPanel />

          </Route>
          <Route path="/*" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit autem illo voluptatem aperiam saepe! Vero minima quam, dolore fuga earum id dicta natus quos laudantium atque voluptatum, rerum at magnam, sapiente aut blanditiis corporis perspiciatis ipsum! Voluptates.
          </Route>
        </Switch>
      </SidebarContent>
    </SidebarWrapper>
  );
}

export default Sidebar;
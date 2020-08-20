import React from 'react';

import { SidebarWrapper, SidebarPlaceholder } from './Siderbar.css';


const Sidebar = ({ sidebarRef }) => {
  return(
    <>
      <SidebarWrapper ref={sidebarRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit autem illo voluptatem aperiam saepe! Vero minima quam, dolore fuga earum id dicta natus quos laudantium atque voluptatum, rerum at magnam, sapiente aut blanditiis corporis perspiciatis ipsum! Voluptates impedit sint tenetur molestiae nesciunt rerum quasi similique neque fugiat aliquam, magnam animi illum nobis ad reiciendis. Unde, laudantium? Tempore ipsum earum, dolor non magnam laborum, delectus inventore blanditiis natus cum, voluptates odit sint optio officia saepe rerum possimus ad omnis. Magni voluptatem delectus dolore reiciendis exercitationem laudantium nesciunt, magnam repellendus in ipsum sunt commodi doloribus nisi. Assumenda dicta natus recusandae magnam.
      </SidebarWrapper>
      {/* <SidebarPlaceholder /> */}
    </>
  );
}


export default Sidebar;
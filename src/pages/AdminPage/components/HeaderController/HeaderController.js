import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { ControllerWrapper, ElementControls } from 'components';
import { 
  HeaderInput,
} from './HeaderController.css';

import { updateRecipeElementData } from 'data/actions/admin.actions';


const HeaderController = ({ id, updateRecipeElementData }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [content, setContent] = useState('');
  const inputRef = useRef(null);


  const handleElementUpdate = () => {
    updateRecipeElementData(id, content);
  }

  const handleMouseLeave = () => {
    if (isBeingEdited)
      inputRef.current.blur();
  }

  return (
    <ControllerWrapper 
      onMouseLeave={handleMouseLeave}
    >
      <ElementControls id={id}/>
      <HeaderInput 
        className="content"
        type="text"
        placeholder="Your header..."
        value={content}
        ref={inputRef}
        onFocus={() => setIsBeingEdited(true)}
        onChange={e => setContent(e.target.value)}
        onBlur={handleElementUpdate}
      />
    </ControllerWrapper>
  )
}

export default connect(null, { updateRecipeElementData })(HeaderController);
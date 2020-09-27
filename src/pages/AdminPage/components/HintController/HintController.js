import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { ControllerWrapper, ElementControls } from 'components';
import { 
  Hint,
  ControllerContent
} from './HintController.css';

import bulbIcon from 'svgs/lightbulb.svg';

import { updateRecipeElementData } from 'data/actions/admin.actions';


const HintController = ({ id, updateRecipeElementData }) => {
  const [isBeingEdit, setIsBeingEdit] = useState(false);
  const [content, setContent] = useState('');
  const inputRef = useRef(null);

  const handleElementUpdate = () => {
    updateRecipeElementData(id, content);
  }

  const handleControllerClick = () => {
    setIsBeingEdit(true);
    // inputRef.current.focus();
    console.log('controller clicked...');
  }

  const handleMouseLeave = () => {
    if (isBeingEdit)
      inputRef.current.blur();
    setIsBeingEdit(false);
  }


  const handleTextareaResize = e => {
    const element = e.target;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight - 60}px`;
  }

  return (
    <ControllerWrapper 
      onMouseLeave={handleMouseLeave}
      onClick={handleControllerClick}
    >
      <ElementControls id={id}/>
      <ControllerContent className="content">
        <img src={bulbIcon} alt=""/>
        <Hint 
          type="text" 
          placeholder="Your hint here..." 
          value={content} 
          onChange={e => setContent(e.target.value)}
          onInput={handleTextareaResize}
          onBlur={handleElementUpdate}
          ref={inputRef}
        />
      </ControllerContent>
    </ControllerWrapper>
  )
}

export default connect(null, { updateRecipeElementData })(HintController);
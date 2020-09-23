import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { ControllerWrapper, ElementControls } from 'components';
import { 
  ControllerContent,
} from './ParagraphController.css';

import { updateRecipeElementData } from 'data/actions/admin.actions';


const ParagraphController = ({ id, updateRecipeElementData }) => {
  const [isBeingEdit, setIsBeingEdit] = useState(false);
  const [content, setContent] = useState('');
  const inputRef = useRef(null);
  const divRef = useRef(null);


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
    element.style.height = `${element.scrollHeight}px`;
  }

  return (
    <ControllerWrapper 
      onMouseLeave={handleMouseLeave}
      onClick={handleControllerClick}
    >
      <ElementControls id={id}/>
      <ControllerContent className="content">
        <textarea 
          type="text" 
          placeholder="Your brand new paragraph" 
          value={content} 
          onChange={e => setContent(e.target.value)}
          onInput={handleTextareaResize}
          onBlur={handleElementUpdate}
          ref={inputRef}
        />
        <div style={{display: 'none'}} ref={divRef}>
          {content}
        </div>
      </ControllerContent>
    </ControllerWrapper>
  )
}

export default connect(null, { updateRecipeElementData })(ParagraphController);
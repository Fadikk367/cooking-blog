import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { 
  ControllerWrapper,
  ControllerContent,
  ControllerOverlay,
  Controls,
  ControlButton,
  ButtonIcon
} from './ParagraphController.css';

import { updateRecipeElementData } from '../../../../data/actions/admin.actions';

import deleteIcon from '../../../../svgs/bin.svg'
import arrowUp from '../../../../svgs/arrow-up.svg'
import arrowDown from '../../../../svgs/arrow-down.svg'

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil laborum ratione inventore, tempora assumenda autem voluptatum doloremque provident culpa est laudantium necessitatibus dolorum eos! Esse architecto, veniam odit dicta molestias a accusantium? Et voluptate minima commodi asperiores illum quae repellendus officia neque. Necessitatibus quas fuga, perspiciatis quia esse qui.'

const ParagraphController = ({ handleDeleteElement, id, updateRecipeElementData }) => {
  const [isBeingEdit, setIsBeingEdit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [content, setContent] = useState(lorem);
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const handleMoveElementUp = () => {
    console.log(`Move element: ${id} up`);
  }

  const handleMoveElementDown = () => {
    console.log(`Move element: ${id} down`);
  }

  const handleElementUpdate = id => {
    updateRecipeElementData(id, content);
  }

  const handleControllerClick = () => {
    setIsBeingEdit(true);
    // inputRef.current.focus();
    console.log('controller clicked...');
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsBeingEdit(false);
    console.log('mouse leave...');
  }

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    inputRef.current.style.height = `${divRef.current.offsetHeight}px`;
    console.log('mouse enter...');
  }

  function handleTextareaResize(e) {
    console.log('input event....');
    const element = e.target;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`
  }

  return (
    <ControllerWrapper 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleControllerClick}
    >
      <Controls isDisplayed={isHovered || isBeingEdit}>
        <ControlButton onClick={handleMoveElementUp}><ButtonIcon src={arrowUp}/></ControlButton>
        <ControlButton onClick={handleMoveElementDown}><ButtonIcon src={arrowDown}/></ControlButton>
        <ControlButton onClick={() => handleDeleteElement(id)}><ButtonIcon src={deleteIcon}/></ControlButton>
      </Controls>
      <ControllerContent className="content">
        <textarea 
          type="text" 
          placeholder="nowy akapit..." 
          value={content} 
          onChange={e => setContent(e.target.value)}
          onInput={handleTextareaResize}
          onBlur={() => handleElementUpdate(id)}
          ref={inputRef}
          style={isHovered ? {display: 'block'} : {display: 'none'}}
        />
        <div 
          style={isHovered ? {display: 'none'} : {display: 'block'}}
          ref={divRef}
        >{content}</div>
      {/* <div 
        contentEditable="true" 
        onInput={e => setContent(e.target.textContent)}
        onChange={e => setContent(e.target.textContent)}
      >{content}</div> */}
      </ControllerContent>
        {/* <ControllerOverlay isDisplayed={isHovered && !isBeingEdit}>
          overlay...
        </ControllerOverlay> */}
    </ControllerWrapper>
  )
}

export default connect(null, { updateRecipeElementData })(ParagraphController);
import React, { useState, useRef } from 'react';

import { 
  ControllerWrapper,
  ControllerContent,
  ControllerOverlay,
  Controls,
  ControlButton,
  ButtonIcon
} from './ParagraphController.css';

import deleteIcon from '../../../../svgs/bin.svg'
import arrowUp from '../../../../svgs/arrow-up.svg'
import arrowDown from '../../../../svgs/arrow-down.svg'

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil laborum ratione inventore, tempora assumenda autem voluptatum doloremque provident culpa est laudantium necessitatibus dolorum eos! Esse architecto, veniam odit dicta molestias a accusantium? Et voluptate minima commodi asperiores illum quae repellendus officia neque. Necessitatibus quas fuga, perspiciatis quia esse qui.'

const ParagraphController = () => {
  const [isBeingEdit, setIsBeingEdit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [content, setContent] = useState(lorem);
  const inputRef = useRef(null);
  const divRef = useRef(null);


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

  const handleMouseEnter = () => {
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
        <ControlButton><ButtonIcon src={arrowUp}/></ControlButton>
        <ControlButton><ButtonIcon src={arrowDown}/></ControlButton>
        <ControlButton><ButtonIcon src={deleteIcon}/></ControlButton>
      </Controls>
      <ControllerContent className="content">
        <textarea 
          type="text" 
          placeholder="nowy akapit..." 
          value={content} 
          onChange={e => setContent(e.target.value)}
          onInput={handleTextareaResize}
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

export default ParagraphController;
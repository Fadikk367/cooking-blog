import React from 'react';
import { connect } from 'react-redux';

import { ControlsContainer, ControlButton, ButtonIcon } from './ElementControls.css';

import { moveRecipeElementData, deleteRecipeElementData } from 'data/actions/admin.actions';

import deleteIcon from '../../svgs/bin.svg';
import arrowUp from '../../svgs/arrow-up.svg'
import arrowDown from '../../svgs/arrow-down.svg'


const ElementControls = ({ id, moveRecipeElementData, deleteRecipeElementData }) => {
  return (
    <ControlsContainer className='controls'>
      <ControlButton onClick={() => moveRecipeElementData(id, -1)}><ButtonIcon src={arrowUp}/></ControlButton>
      <ControlButton onClick={() => moveRecipeElementData(id, 1)}><ButtonIcon src={arrowDown}/></ControlButton>
      <ControlButton onClick={() => deleteRecipeElementData(id)}><ButtonIcon src={deleteIcon}/></ControlButton>
    </ControlsContainer>
  )
}


export default connect(null, { moveRecipeElementData, deleteRecipeElementData })(ElementControls);
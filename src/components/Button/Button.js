import React from 'react';


import { StyledButton, ButtonIcon } from './Button.css';

const Button = ({ children, icon = null, bgColor = 'transparent', onClick, to = '' }) => {
  return (
    <StyledButton bgColor={bgColor} onClick={onClick}>
      {icon ? <ButtonIcon src={icon}/> : null}
      {children}
    </StyledButton>
  )
}

export default Button;
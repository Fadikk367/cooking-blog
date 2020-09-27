import React from 'react';

import { HeaderWrapper, Title, TitleText, TitleLogo } from './Header.css';

import chefHatIcon from 'svgs/chef-hat.svg'


const Footer = () => {
  return (
    <HeaderWrapper>
      <Title>
        <TitleLogo src={chefHatIcon}/>
        <TitleText>Wiesia Gotuje</TitleText>
      </Title>
    </HeaderWrapper>
  )
}


export default Footer;
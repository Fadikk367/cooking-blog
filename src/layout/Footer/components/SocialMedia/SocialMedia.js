import React from 'react';

import { SocialContainer, SocialHeader, IconsContainer, SocialIcon } from './SocialMedia.css';

import facebookIcon from 'svgs/assets/facebook.svg';
import instagramIcon from 'svgs/assets/instagram.svg';


const SocialMedia = () => {
  return (
    <SocialContainer>
      <SocialHeader>Social media</SocialHeader>
      <IconsContainer>
        <SocialIcon src={facebookIcon}/>
        <SocialIcon src={instagramIcon}/>
      </IconsContainer>
    </SocialContainer>
  )
}

export default SocialMedia;
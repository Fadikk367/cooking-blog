import React from 'react';

import { FooterWrapper, FooterRow, FooterLogo } from './Footer.css';
import { SubscribeNewsletterForm, SocialMedia, TableOfContent, Copyrights } from './components';


const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRow>
        <SubscribeNewsletterForm />
        <SocialMedia />
        <FooterLogo>Wiesia Gotuje</FooterLogo>
      </FooterRow>
      <FooterRow>
        <TableOfContent />
      </FooterRow>
      <FooterRow>
        <Copyrights />
      </FooterRow>
    </FooterWrapper>
  )
}


export default Footer;
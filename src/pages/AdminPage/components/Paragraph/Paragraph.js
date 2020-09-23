import React from 'react';
import { ParagraphWrapper, ParagraphConent } from './Paragraph.css';

const Paragraph = ({ children }) => {
  return (
    <ParagraphWrapper>
      <ParagraphConent>
        {children}
      </ParagraphConent>
    </ParagraphWrapper>
  )
}

export default Paragraph;
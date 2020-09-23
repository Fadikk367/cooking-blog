import React from 'react';
import { ParagraphWrapper, ParagraphInput } from './ParagraphEdit.css';

const ParagraphEdit = ({ children }) => {
  return (
    <ParagraphWrapper>
      <ParagraphInput value={children} placeholder="Enter your text here...">
      </ParagraphInput>
    </ParagraphWrapper>
  )
}

export default ParagraphEdit;
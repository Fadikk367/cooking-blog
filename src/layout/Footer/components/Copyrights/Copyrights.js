import React from 'react';

import { CopyrightsWrapper, Phrase } from './Copyrights.css';


const Copyrights = () => {
  return (
    <CopyrightsWrapper>
      <Phrase>Copyright 2020 &copy; - Wiesia Gotuje</Phrase>
      <Phrase>Privacy policy</Phrase>
      <Phrase>Terms of use</Phrase>
    </CopyrightsWrapper>
  )
}

export default Copyrights;
import React, { useState, useEffect } from 'react';

import { 
  ControllerWrapper,
  ControllerContent,
  Controls,
  ControlButton,
  ButtonIcon
 } from './PhotoController.css';

 import deleteIcon from '../../../../svgs/bin.svg'
import arrowUp from '../../../../svgs/arrow-up.svg'
import arrowDown from '../../../../svgs/arrow-down.svg'

const PhotoController = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  const handleFileSelect = e => {
    console.log(e.target.files)
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(e.target.files[0]);
  }

  return (
    <ControllerWrapper>
      <Controls>
        <ControlButton><ButtonIcon src={arrowUp}/></ControlButton>
        <ControlButton><ButtonIcon src={arrowDown}/></ControlButton>
        <ControlButton><ButtonIcon src={deleteIcon}/></ControlButton>
      </Controls>
      <ControllerContent>
        <input type="file" onChange={handleFileSelect}/>
        {selectedFile ? <img src={preview} alt="delected file"/> : null}
      </ControllerContent>
    </ControllerWrapper>
  )
}


export default PhotoController;
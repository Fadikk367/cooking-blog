import React, { useState, useEffect } from 'react';

import { 
  ControllerWrapper,
  ControllerContent,
  Controls,
  ControlButton,
  ButtonIcon,
  ImagePreview,
  DropZone
 } from './PhotoController.css';

 import deleteIcon from '../../../../svgs/bin.svg'
import arrowUp from '../../../../svgs/arrow-up.svg'
import arrowDown from '../../../../svgs/arrow-down.svg'
import imageIcon from '../../../../svgs/image.svg'

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
        <DropZone for="file-input" isHidden={!!selectedFile}>
          <img src={imageIcon} alt=""/>
          <h2>Wybierz zdjecie</h2>
          <h3>Przecignij i upuść lub kliknij i wybierz</h3>
          <input type="file" onChange={handleFileSelect} id='file-input'/>
        </DropZone>
        {selectedFile ? <ImagePreview src={preview} alt="delected file"/> : null}
      </ControllerContent>
    </ControllerWrapper>
  )
}


export default PhotoController;
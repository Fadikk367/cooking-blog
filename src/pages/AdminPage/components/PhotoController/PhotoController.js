import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ControllerWrapper, ElementControls } from 'components';
import { 
  ControllerContent,
  ImagePreview,
  DropZone
 } from './PhotoController.css';

import { updateRecipeElementData } from '../../../../data/actions/admin.actions';
import { PhotoOrientation } from '../../../../utils/elementTypes';
import { determinePhotoOrientation } from '../../../../utils/helpers';

import imageIcon from '../../../../svgs/image.svg'

const PhotoController = ({ id, updateRecipeElementData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [photoOrientation, setPhotoOrientation] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    
    
    const image = new Image();
    image.src = objectUrl;
    
    image.onload = () => {
      const orientation = determinePhotoOrientation(image);
      setPhotoOrientation(orientation);
      updateRecipeElementData(id, { url: objectUrl, orientation});
    };
  }, [selectedFile, updateRecipeElementData, id]);

  const handleFileSelect = e => {
    console.log(e.target.files)
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    setSelectedFile(e.target.files[0]);
  }

  return (
    <ControllerWrapper>
      <ElementControls id={id}/>
      <ControllerContent className="content" isImageSelected={!!selectedFile}>
        {selectedFile ? <ImagePreview src={preview} alt="delected file"/> : null}
        <DropZone for="file-input" isHidden={!!selectedFile}>
          <img src={imageIcon} alt=""/>
          <h2>Wybierz zdjecie</h2>
          <h3>Przecignij i upuść lub kliknij i wybierz</h3>
          <input type="file" onChange={handleFileSelect} id='file-input'/>
        </DropZone>
      </ControllerContent>
    </ControllerWrapper>
  )
}


export default connect(null , { updateRecipeElementData })(PhotoController);
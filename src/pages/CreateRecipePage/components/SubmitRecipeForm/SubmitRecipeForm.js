import React from 'react';
import { connect } from 'react-redux';

import { SubmitFormWrapper, SubmitButton } from './SubmitRecipeForm.css';
import { addRecipe } from 'data/actions/admin.actions';
import { Element } from 'utils/elementTypes'

const SubmitRecipeForm = ({ recipe }) => {
  const handleSubmitForm = async () => {
    const photoElements = Object.values(recipe.elements).filter(element => element.type === Element.PHOTO);

    const photoFiles = await Promise.all(photoElements.map(async (element, idx) => {
      const photoBlob = await fetch(element.photo).then(r => r.blob());
      const photoFile = new File([photoBlob], `photo${idx}.png`);
      element.photoName = `photo${idx}.png`;
      URL.revokeObjectURL(element.photo);
      delete element.photo;
      return photoFile;
    }));

    addRecipe({
      title: recipe.title,
      metadata: recipe.metadata,
      elements: Object.values(recipe.elements),
      photos: photoFiles,
    })
  }
  return (
    <SubmitFormWrapper>
      <SubmitButton onClick={handleSubmitForm}>OPUBLIKUJ PRZEPIS</SubmitButton>
    </SubmitFormWrapper>
  )
}

const mapStateToProps = state => ({
  recipe: state.admin.recipe,
});

export default connect(mapStateToProps, null)(SubmitRecipeForm);
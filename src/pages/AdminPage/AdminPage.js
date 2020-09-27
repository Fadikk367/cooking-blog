import React, { useState} from 'react';
import { connect } from 'react-redux';

import { 
  ParagraphController, 
  PhotoController, 
  ListController,
  HeaderController,
  HintController,
  SubmitRecipeForm,
  MetaInfoForm,
} from './components';
import { AdminPageWrapper, TitleInput } from './AdminPage.css';
import { updateRecipeTitle } from 'data/actions';

import { Element } from '../../utils/elementTypes';


const AdminPage = ({ updateRecipeTitle, elements = [] }) => {
  const [title, setTitle] = useState('');

  const renderRecieElement = ([key, data]) => {
    let recipeElement = null;
    switch(data.type) {
      case Element.PARAGRAPH: {
        recipeElement = <ParagraphController key={key} id={key}/>
        break;
      }
      case Element.PHOTO: {
        recipeElement = <PhotoController key={key} id={key}/>
        break;
      }
      case Element.LIST: {
        recipeElement = <ListController key={key} id={key}/>
        break;
      }
      case Element.HEADER: {
        recipeElement = <HeaderController key={key} id={key}/>
        break;
      }
    case Element.HINT: {
      recipeElement = <HintController key={key} id={key}/>
      break;
      }
      default:
        return;
    }
    return recipeElement;
  }

  const handleRecipeTitleUpdate = () => {
    if(!title)
      return;

    updateRecipeTitle(title);
  }

  const handleTextareaResize = e => {
    const element = e.target;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight - 40}px`;
  }

  const renderedRecipeElements = elements.map(renderRecieElement);

  return (
    <AdminPageWrapper>
      <TitleInput 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        onInput={handleTextareaResize}
        onBlur={handleRecipeTitleUpdate}
        placeholder='Recipe title...'
      />
      {renderedRecipeElements}
      <MetaInfoForm />
      <SubmitRecipeForm />
    </AdminPageWrapper>
  )
}

const mapStateToProps = state => ({
  elements: Object.entries(state.admin.recipe.elements).sort((a, b) => {
    return a[1].index - b[1].index;
  }),
});

export default connect(mapStateToProps, { updateRecipeTitle })(AdminPage);
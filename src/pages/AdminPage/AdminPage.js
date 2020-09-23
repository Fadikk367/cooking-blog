import React, { useState} from 'react';
import { connect } from 'react-redux';

import { 
  ParagraphController, 
  PhotoController, 
  ListController,
  HeaderController,
  SubmitRecipeForm,
} from './components';
import { AdminPageWrapper } from './AdminPage.css';

import { Element } from '../../utils/elementTypes';


const AdminPage = ({ deleteRecipeElementData, elements = [] }) => {
  const [title, setTitle] = useState('');
  const [metaInfo, setMetaInfo] = useState({});
  console.log(elements);


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
      default:
        return;
    }
    return recipeElement;
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('dodaj przepis...')
  }

  const renderedRecipeElements = elements.map(renderRecieElement);

  return (
    <AdminPageWrapper>
      <h1>Create your awesome recipe!</h1>
      <form onSubmit={handleFormSubmit}>
        <label for="title">Tytuł:</label><br />
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/><br />
        {renderedRecipeElements}
        <SubmitRecipeForm />
      </form>
    </AdminPageWrapper>
  )
}

const mapStateToProps = state => ({
  elements: Object.entries(state.admin.recipe.elements).sort((a, b) => {
    return a[1].index - b[1].index;
  }),
});

export default connect(mapStateToProps, {})(AdminPage);
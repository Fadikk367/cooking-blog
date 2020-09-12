import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { 
  ParagraphController, 
  PhotoController, 
  ListController,
  SubmitRecipeForm,
} from './components';
import { AdminPageWrapper, SubmitButton } from './AdminPage.css';

import { createRecipeElementData, deleteRecipeElementData } from '../../data/actions/admin.actions';
import { addRecipe } from '../../data/actions';
import { Element } from '../../utils/elementTypes';


const AdminPage = ({ addRecipe, createRecipeElementData, deleteRecipeElementData }) => {
  const [title, setTitle] = useState('');
  const [elementCount, setElementCount] = useState(0);
  const [metaInfo, setMetaInfo] = useState({});
  const [recipeElements, setRecipeElements] = useState([]);

  // const orderedRecipeElements = useMemo(() => {
  //   return recipeElements.sort((elementA, elementB) => elementA.props.lp > elementB.props.lp)
  // }, [recipeElements]);

  const createRecipeElement = (type, index = recipeElements.length) => {
    switch(type) {
      case Element.PARAGRAPH: {
        const elementId = `p-${elementCount}`
        const paragraph = <ParagraphController key={elementId} id={elementId} handleDeleteElement={handleDeleteRecipeElement}/>
        createRecipeElementData(Element.PARAGRAPH, elementId);
        setRecipeElements([...recipeElements, paragraph]);
        break;
      }
      case Element.PHOTO: {
        const elementId = `img-${elementCount}`;
        const photo = <PhotoController key={elementId} id={elementId} handleDeleteElement={handleDeleteRecipeElement}/>
        createRecipeElementData(Element.PHOTO, elementId);
        setRecipeElements([...recipeElements, photo]);
        break;
      }
      case Element.LIST: {
        const elementId = `ul-${elementCount}`;
        const list = <ListController key={elementId} id={elementId} handleDeleteElement={handleDeleteRecipeElement}/>
        createRecipeElementData(Element.LIST, elementId);
        setRecipeElements([...recipeElements, list]);
        break;
      }
      default:
        return;
    }
    setElementCount(prev => prev + 1);
  }

  const handleDeleteRecipeElement = (id) => {
    console.log(`REMOVE element: ${id}`);
    console.log({ recipeElements });
    const newRecipeELements = recipeElements.filter(element => element.props.id !== id);
    console.log({ newRecipeELements });
    setRecipeElements(newRecipeELements);
    deleteRecipeElementData(id);
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('dodaj przepis...')
  }

  return (
    <AdminPageWrapper>
      <h1>Admin Page</h1>
      <button onClick={() => createRecipeElement(Element.PARAGRAPH)}>add paragraph</button>
      <button onClick={() => createRecipeElement(Element.PHOTO)}>add photo</button>
      <button onClick={() => createRecipeElement(Element.LIST)}>add list</button>
      <form onSubmit={handleFormSubmit}>
        <label for="title">Tytuł:</label><br />
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/><br />
        {recipeElements}
        <SubmitRecipeForm />
      </form>
    </AdminPageWrapper>
  )
}

export default connect(null, { addRecipe, createRecipeElementData, deleteRecipeElementData })(AdminPage);
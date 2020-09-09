import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { IngredientsListForm, ParagraphController, PhotoController } from './components';

import { createRecipeElement } from '../../../../data/actions/admin.actions';
import { addRecipe } from '../../data/actions';
import { Element } from '../../utils/elementTypes';


const AdminPage = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState(['fasola', 'ziemniaki', 'buraki']);
  const [content, setContent] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const [metaInfo, setMetaInfo] = useState({});
  const [recipeElements, setRecipeElements] = useState([]);

  // const orderedRecipeElements = useMemo(() => {
  //   return recipeElements.sort((elementA, elementB) => elementA.props.lp > elementB.props.lp)
  // }, [recipeElements]);

  const createRecipeElement = (type, index = recipeElements.length) => {
    switch(type) {
      case Element.PARAGRAPH: {
        const paragraph = <ParagraphController lp={index}/>
        setRecipeElements([...recipeElements, paragraph]);
        break;
      }
      case Element.PHOTO: {
        const photo = <PhotoController lp={index}/>
        setRecipeElements([...recipeElements, photo]);
        break;
      }
      default:
        return;
    }
  }

  const handleAddIngredient = newIngredient => {
    if (!newIngredient) return;

    setIngredients([...ingredients, newIngredient]);
  }

  const handleRemoveIngredient = name => {
    const remainingIngredients = ingredients.filter(ingredient => ingredient !== name);

    setIngredients(remainingIngredients);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !difficulty || ingredients.length === 0) return;

    addRecipe({ title, content, difficulty, ingredients });
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label for="title">Tytuł:</label><br />
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/><br />

        <IngredientsListForm 
          items={ingredients}
          handleAddIngredient={handleAddIngredient}
          handleRemoveIngredient={handleRemoveIngredient}
        />

        <label for="title">Content:</label><br />
        <textarea name="content" value={content} onChange={e => setContent(e.target.value)} style={{ width: '600px', height: '300px'}}/><br />
        <label for="title">Difficulty:</label><br />
        <input type="text" name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}/><br />
        <ParagraphController /><br/>
        <PhotoController />
        <ParagraphController /><br/>
        <PhotoController />
        <ParagraphController /><br/>
        <button type="submit">SUBMIT</button><br />
      </form>
    </div>
  )
}

export default connect(null, { addRecipe })(AdminPage);
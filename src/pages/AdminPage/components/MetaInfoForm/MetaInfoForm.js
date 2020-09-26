import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MetaFormWrapper, MetaLabel, MetaInput, LabelIcon, LabelText, MetaSelect, RecipeTag, MetaTextara } from './MetaInfoForm.css';

import { updateRecipeMetadata } from 'data/actions';

import clockIcon from 'svgs/clock.svg';
import puzzleIcon from 'svgs/puzzle.svg';
import tagsIcon from 'svgs/tags.svg';
import signIcon from 'svgs/sign.svg';
import paragraphIcon from 'svgs/paragraph.svg';

class RecipeDifficulty {
  static BEGINNER = 'BEGINNER';
  static ADEPT = 'ADEPT';
  static INTERMEDIATE = 'INTERMEDIATE';
  static MASTER = 'MASTER';
  static TOP_CHEF = 'TOP_CHEF';
}

class RecipeCategory {
  static SALAD = 'SALAD';
  static PASTA = 'PASTA';
  static MEAT = 'MEAT';
  static FISH = 'FISH';
  static VEGE = 'VEGE';
}

const recipeTagsColors = ['red', 'orange', 'lightgray', 'lightblue', 'lightgreen', 'yellow', 'pink', 'violet'];

const getRandomColor = () => {
  const colorIndex = Math.floor(Math.random()*recipeTagsColors.length);
  return recipeTagsColors[colorIndex];
}


const MetaInfoForm = () => {
  const [difficulty, setDifficulty] = useState(RecipeDifficulty.BEGINNER);
  const [preparationTime, setPreparationTime] = useState('00:00');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [category, setCategory] = useState(RecipeCategory.SALAD);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleUpdateMetadata = e => {
    const metaKey = e.target.name;
    let metaValue = e.target.value;

    if(metaKey === 'tags')
      metaValue = tags;

    dispatch(updateRecipeMetadata(metaKey, metaValue));
  }

  const handleAddTag = e => {
    e.preventDefault();

    if (!currentTag || tags.includes(currentTag)) {
      setCurrentTag('');
      return;
    }

    setTags([...tags, `#${currentTag}`]);
    setCurrentTag('');
  }

  const renderedTags = tags.map(tag => (
    <RecipeTag key={tag} color={getRandomColor()}>{tag}</RecipeTag>
  ))

  return (
    <MetaFormWrapper>
        <MetaLabel>
          <LabelIcon src={clockIcon}/>
          <LabelText>Czas przygotowania:</LabelText>
          <MetaInput 
            value={preparationTime} 
            onChange={e => setPreparationTime(e.target.value)} 
            type='time'
            name='time'
            onBlur={handleUpdateMetadata}
          />
        </MetaLabel>
        <MetaLabel>
          <LabelIcon src={puzzleIcon}/>
          <LabelText>Trudność:</LabelText>
          <MetaSelect 
            value={difficulty} 
            onChange={e => setDifficulty(e.target.value)} 
            onBlur={handleUpdateMetadata}
            name='difficulty'
          >
            <option value={RecipeDifficulty.BEGINNER}>Beginner</option>
            <option value={RecipeDifficulty.ADEPT}>Adpet</option>
            <option value={RecipeDifficulty.INTERMEDIATE}>Intermediate</option>
            <option value={RecipeDifficulty.MASTER}>Master</option>
            <option value={RecipeDifficulty.TOP_CHEF}>Top Chef</option>
          </MetaSelect>
        </MetaLabel>
        <MetaLabel>
          <LabelIcon src={signIcon}/>
          <LabelText>Kategoria:</LabelText>
          <MetaSelect 
            value={category} 
            onChange={e => setCategory(e.target.value)} 
            onBlur={handleUpdateMetadata}
            name='category'
          >
            <option value={RecipeCategory.SALAD}>Salad</option>
            <option value={RecipeCategory.PASTA}>Pasta</option>
            <option value={RecipeCategory.MEAT}>Meat</option>
            <option value={RecipeCategory.FISH}>Fish</option>
            <option value={RecipeCategory.VEGE}>Vege</option>
          </MetaSelect>
        </MetaLabel>
        <MetaLabel>
          <LabelIcon src={tagsIcon}/>
          <LabelText>Tagi:</LabelText>
          <form onSubmit={handleAddTag}>
            <MetaInput 
              value={currentTag} 
              onChange={e => setCurrentTag(e.target.value)} 
              onBlur={handleUpdateMetadata}
              name='tags'
            />
            <button type='submit'>+</button>
          </form>
          <br />
          {renderedTags}
        </MetaLabel>
        <MetaLabel>
          <LabelIcon src={paragraphIcon}/>
          <LabelText>Opis:</LabelText>
          <MetaTextara 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            onBlur={handleUpdateMetadata}
            name='description'
          />
        </MetaLabel>
    </MetaFormWrapper>
  )
}


export default MetaInfoForm;
import React from 'react';

import { Table, ContentCard } from './TableOfContent.css';

import signIcon from 'svgs/assets/sign.svg';
import lightBulbIcon from 'svgs/assets/light-bulb.svg';
import searchIcon from 'svgs/assets/searching.svg';
import recipeIcon from 'svgs/assets/recipe.svg';


const TableOfContent = () => {
  return (
    <Table>
      <ContentCard>
        <img src={recipeIcon} alt=""/>
        <h3>Recipes</h3>
      </ContentCard>
      <ContentCard>
        <img src={signIcon} alt=""/>
        <h3>Categories</h3>
      </ContentCard>
      <ContentCard>
        <img src={searchIcon} alt=""/>
        <h3>Advanced search</h3>
      </ContentCard>
      <ContentCard>
        <img src={lightBulbIcon} alt=""/>
        <h3>Hints</h3>
      </ContentCard>
    </Table>
  )
}

export default TableOfContent;
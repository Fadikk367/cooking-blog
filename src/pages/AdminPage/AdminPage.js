import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addRecipe } from '../../data/actions';


const AdminPage = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !difficulty) return;

    addRecipe({ title, content, difficulty });
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label for="title">Tytuł:</label><br />
        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/><br />
        <label for="title">Content:</label><br />
        <textarea name="content" value={content} onChange={e => setContent(e.target.value)} style={{ width: '600px', height: '300px'}}/><br />
        <label for="title">Difficulty:</label><br />
        <input type="text" name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}/><br />
        <button type="submit">SUBMIT</button><br />
      </form>
    </div>
  )
}

export default connect(null, { addRecipe })(AdminPage);
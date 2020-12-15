import React, {Fragment, useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {

  // const categories = ['Dragon Ball', 'Samurai X', 'Shaman King']

  const [categories, setCategories] = useState(['']);
  // const handleAdd = () => setCategories([...categories, 'Hunter X Hunter']);

  return (
    <Fragment>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />))
        }
      </ul>
    </Fragment>
  );
}

export default GitExpertApp;
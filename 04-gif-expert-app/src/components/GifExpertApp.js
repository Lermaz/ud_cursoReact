import React, { Fragment, useState } from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState( defaultCategories );

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
      <ol>
        {
          categories.map( category => 
             <GifGrid 
              key={ category }
              category={ category } />
          )
        }
      </ol>
    </Fragment>
  )
}
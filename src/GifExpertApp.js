import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hola']);

    /*const handleAdd = () => {
        //setCategories( [...categories, 'Hola'] );
        setCategories(cats => [...cats,'Hola']);
    }*/

  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories }/>
        <hr/>
        {
            categories.map(category => (
                <GifGrid 
                key ={category}
                category={ category }/>

            ))
        }
    </div>
  )
};

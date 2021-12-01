import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/add-category';
import { GifGrid } from './components/gif-grid';

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['anime']);
    
    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr/>
            <AddCategory setCategorias={setCategorias}/>
            <ol>
                {categorias.map(function(category,index){
                    return (
                        <GifGrid key={category} category={category}/>
                    )
                })}
            </ol>
            
        </div>
    )
}

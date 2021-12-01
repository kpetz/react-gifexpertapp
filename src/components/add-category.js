import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) =>{
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias(cats => [inputValue, ...cats ]);
            setInputValue(' ');
        }
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={(e) => handleChange(e)}/>
        {/* <input type='submit' value='Adicionar'/> */}
    </form>
}
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
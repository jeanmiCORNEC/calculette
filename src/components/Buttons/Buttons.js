import '../Buttons/buttons.css';
import React from 'react';

const Buttons = ({value, handleClick}) => {
    return (
        <button
        className="buttons"
        onClick={()=>handleClick(value)}>
            {value}
        </button>
    );
};

export default Buttons;
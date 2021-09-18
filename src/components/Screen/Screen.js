import './screen.css';
import React from 'react';

const Screen = ({text, resultDisplay}) => {
    return (
        <div>
            <div className="resut">{resultDisplay}</div>
            <div className="text">{text}</div>
        </div>
    );
};

export default Screen;
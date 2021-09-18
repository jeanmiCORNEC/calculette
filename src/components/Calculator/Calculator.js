import Buttons from '../Buttons/Buttons';
import React, { useState } from 'react';
import Screen from '../Screen/Screen';
import * as math from 'mathjs';
//css
import '../Calculator/calculator.css';

const Calculator = () => {
    const [text, setText] = useState("");
    const [resultDisplay, setResultDisplay] =useState("0");

    const addText = (val) => {
        setText([...text, val]);
    };

    const clearAll=() => {
        setText("0");
        setResultDisplay("");
    }

    const result = () => {
        let calc= text.join("");
        setResultDisplay(math.evaluate(calc));
    }


    return (
        <div className="container">
            <Screen text={text} resultDisplay={resultDisplay}/>
        <div className="row">
            <div className="row">
                <Buttons value="AC" handleClick={clearAll}/>
                <Buttons value="C"/>
                <Buttons value="%" handleClick={addText}/>
                <Buttons value="/" handleClick={addText}/>
            </div>
            <div className="row">
                <Buttons value="7" handleClick={addText}/>
                <Buttons value="8" handleClick={addText}/>
                <Buttons value="9" handleClick={addText}/>
                <Buttons value="*" handleClick={addText}/>
            </div>
            <div className="row">
                <Buttons value="4" handleClick={addText}/>
                <Buttons value="5" handleClick={addText}/>
                <Buttons value="6" handleClick={addText}/>
                <Buttons value="-" handleClick={addText}/>
            </div>
            <div className="row">
                <Buttons value="1" handleClick={addText}/>
                <Buttons value="2" handleClick={addText}/>
                <Buttons value="3" handleClick={addText}/>
                <Buttons value="+" handleClick={addText}/>
            </div>
            <div className="row">
                <Buttons value="." handleClick={addText}/>
                <Buttons value="0" handleClick={addText}/>
                <Buttons value="=" handleClick={result}/>
            </div>
        </div>
            
        </div>
    );
};

export default Calculator;
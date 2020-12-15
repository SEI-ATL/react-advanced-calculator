import React, { useState } from 'react'

const Calculator = props => {
   
    
    // Declared state variables
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [total, setTotatl] = useState('');

    const handleClick = (e) => {
        if (e === '+' || e === '-' || e === 'x' || e === '/') {
            setOperator(`${operator}${e}`)
        } else if (operator === '' && num2 === '') {
            setNum1(`${num1}${e}`)
            } else {
                if (num1 != '' && num2 != '' && operator != '' && e === '=') {
                    if (operator === '+') {
                        setTotatl(parseInt(num1) + parseInt(num2))
                    } else if (operator === '-') {
                        setTotatl(parseInt(num1) - parseInt(num2))
                    } else if (operaor === 'x') {
                        setTotatl(parseInt(num1) * parseInt(num2))
                    } else if (operator === '/') {
                        setTotatl(parseInt(num1) / parseInt(num2))
                    }
                }

                setNum2(`${num2}${e}`)
            }
    }
        

    // Added a handleClear function that will clear everything
    handleClear = () => {
        setNum1('');
        setNum2('');
        setOperator('');
        setTotatl('');
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">4</button>
                    <button className="calc-button">5</button>
                    <button className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">1</button>
                    <button className="calc-button">2</button>
                    <button className="calc-button">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
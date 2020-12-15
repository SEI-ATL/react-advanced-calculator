import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [value, setValue] = useState('');
    const [oopsie, setOopsie] = useState('');

    const handleClick = (e) => {
        if (e === 'x' || e === '/' || e === '+' || e === '-') {
            if (operator.length === 1) {
                setOopsie('Only choose one operator!')
                return
            }
            setOperator(`${operator}${e}`)
        } else if (operator === '' && num2 === '') {
            setNum1(`${num1}${e}`)
        } else {
            if (num1 != '' && num2 != '' && operator != '' && e === '=') {
                if (operator === '+') {
                    setValue(parseInt(num1) + parseInt(num2))
                } else if (operator === '-') {
                    setValue(parseInt(num1) - parseInt(num2))
                } else if (operator === 'x') {
                    setValue(parseInt(num1) * parseInt(num2))
                } else {
                    setValue(parseInt(num1) / parseInt(num2))
                }
            }
            setNum2(`${num2}${e}`)
        }
    }

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setOperator('');
        setValue('');
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
    <div className="answer-box">{num1}{operator}{num2} {value ? `${value}` : ''}</div>
                <div className="calc-row">
                    <button onClick={() => handleClear()} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={() => handleClick('/')} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick('7')} className="calc-button">7</button>
                    <button onClick={() => handleClick('8')} className="calc-button">8</button>
                    <button onClick={() => handleClick('9')} className="calc-button">9</button>
                    <button onClick={() => handleClick('x')} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick('4')} className="calc-button">4</button>
                    <button onClick={() => handleClick('5')} className="calc-button">5</button>
                    <button onClick={() => handleClick('6')} className="calc-button">6</button>
                    <button onClick={() => handleClick('-')} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick('1')} className="calc-button">1</button>
                    <button onClick={() => handleClick('2')} className="calc-button">2</button>
                    <button onClick={() => handleClick('3')} className="calc-button">3</button>
                    <button onClick={() => handleClick('+')} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick('0')} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={() => handleClick('=')} className="calc-button calc-button-op">=</button>
                </div>
            </div>
            <h4>{oopsie}</h4>
        </div>
    )
}

export default Calculator
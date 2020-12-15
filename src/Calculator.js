import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [values, setValues] = useState(0);
    const [num1, setNum1] = useState(0);
    const [operator, setOperator] = useState('');
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState(0);
   

    const clear = () => {
        setValues(0);
        setNum1(0);
        setOperator('');
        setNum2(0);
        setAnswer(0)
    }

    const handleValue = (number) => {
        if (operator !== '' && values !== 0) {
            let currentValue = values.toString()
            let newValue = currentValue.concat(number.toString())
            setValues(newValue)
            setNum2(parseInt(newValue))
        }
        else if (operator !== '' && values === 0) {
            setValues(number)
            setNum2(number)
        }
        else if (values !== 0) {
            let currentValue = values.toString()
            let newValue = currentValue.concat(number.toString())
            setValues(newValue)
            setNum1(parseInt(newValue))
        } 
        else if (values === 0) {
            setValues(number);
            setNum1(number)
        }
    }

    const handleOperator = (op) => {
        if (operator !== '') {
            setAnswer('Error!')
        } 
        else {
            setOperator(op)
            setValues(0)
        }
    }
    const equal = () => {
        
        let result = 0
        if (operator === '+') {
            result = (num1 + num2)
        } else if (operator === '-') {
            result = (num1 - num2)
        } else if (operator === 'x') {
            result = (num1 * num2)
        } else if (operator === '/') {
            result = (num1 / num2)
        } 
        setAnswer(result.toFixed(2))
    }
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{values}</p>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => clear()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleValue(7)}>7</button>
                    <button className="calc-button" onClick={() => handleValue(8)}>8</button>
                    <button className="calc-button" onClick={() => handleValue(9)}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('x')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleValue(4)}>4</button>
                    <button className="calc-button" onClick={() => handleValue(5)}>5</button>
                    <button className="calc-button" onClick={() => handleValue(6)}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleValue(1)}>1</button>
                    <button className="calc-button" onClick={() => handleValue(2)}>2</button>
                    <button className="calc-button" onClick={() => handleValue(3)}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => handleValue(0)}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={() => equal()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
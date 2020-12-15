import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [display, setDisplay] = useState(0);
    const [operator, setOperator] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState('')

    const handleClear = () => {
        setDisplay(0);
        setOperator('');
        setNum1(0)
        setNum2(0)
        setResult('')
    }

    const handleNum = (num) => {
        if (display !== 0) {
            let currentDisplay = display.toString()
            let newDisplay = currentDisplay.concat(num.toString())
            setDisplay(newDisplay)
        } else if (display === 0) {
            setDisplay(num);
        }
    }

    const handleOperator = (op) => {
        if (operator !== '') {
            setResult('Error!')
        } else {
            setOperator(op)
            setNum1(parseFloat(display))
            setDisplay(0)
        }
    }

    const handleSubmit = () => {
        setNum2(parseFloat(display))
        let answer = 0
        if (operator === '+') {
            answer = (num1 + num2)
        } else if (operator === '-') {
            answer = (num1 - num2)
        } else if (operator === 'x') {
            answer = (num1 * num2)
        } else if (operator === '/') {
            answer = (num1 / num2)
        } else if (operator === '%') {
            answer = (num1 % num2)
        }
        setResult(answer.toFixed(2))
    }

    const handleDecimal = () => {
        if (display.toString().includes('.')) {
            return
        } else {
            let currentDisplay = display.toString()
            let newDisplay = currentDisplay.concat('.')
            setDisplay(newDisplay)
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{display}</p>
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button onClick={() => {handleClear()}} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button onClick={() => {handleOperator('%')}}className="calc-button calc-button-top">%</button>
                    <button onClick={() => {handleOperator('/')}} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => {handleNum(7)}} className="calc-button">7</button>
                    <button onClick={() => {handleNum(8)}} className="calc-button">8</button>
                    <button onClick={() => {handleNum(9)}} className="calc-button">9</button>
                    <button onClick={() => {handleOperator('x')}} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => {handleNum(4)}} className="calc-button">4</button>
                    <button onClick={() => {handleNum(5)}} className="calc-button">5</button>
                    <button onClick={() => {handleNum(6)}} className="calc-button">6</button>
                    <button onClick={() => {handleOperator('-')}} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => {handleNum(1)}} className="calc-button">1</button>
                    <button onClick={() => {handleNum(2)}} className="calc-button">2</button>
                    <button onClick={() => {handleNum(3)}} className="calc-button">3</button>
                    <button onClick={() => {handleOperator('+')}} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button onClick={() => {handleDecimal()}} className="calc-button">.</button>
                    <button onClick={() => {handleSubmit()}} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
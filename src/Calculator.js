import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [display, setDisplay] = useState('')
    const [num1, setNum1] = useState('')
    const [operator, setOperator] = useState('')
    const [num2, setNum2] = useState('')
    // const [equate, setEquate] = useState()


    const handleClickNums = (num) => {
        if (display === '' && num === '0') {
            return
        } else if (display === '') {
            setDisplay(num)
            // setNum1(num)
        } else {
            let newDisplay = display.concat(num)
            if (display === '+' || display === '-' || display === '*' || display === '/') {
                setDisplay(newDisplay)
                setNum2(num)
            }
            setDisplay(newDisplay)
            // setNum1(num)
        }
    }

    const handleClearDisplay = () => {
        setDisplay('')
    }
    
    const handleOperator = (opp) => {
        setNum1(display)
        setDisplay(opp)
        setOperator(opp)
    }

    const evaluate = () => {
        let evaluation = eval(`${num1} ${operator} ${num2}`)
        setDisplay(evaluation)
        console.log(evaluation)
    }
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Dis: {display} </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => handleClearDisplay()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleClickNums('7')}>7</button>
                    <button className="calc-button" onClick={() => handleClickNums('8')}>8</button>
                    <button className="calc-button" onClick={() => handleClickNums('9')}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('*')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleClickNums('4')}>4</button>
                    <button className="calc-button" onClick={() => handleClickNums('5')}>5</button>
                    <button className="calc-button" onClick={() => handleClickNums('6')}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => handleClickNums('1')}>1</button>
                    <button className="calc-button" onClick={() => handleClickNums('2')}>2</button>
                    <button className="calc-button" onClick={() => handleClickNums('3')}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => handleOperator('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => handleClickNums('0')}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={() => evaluate()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
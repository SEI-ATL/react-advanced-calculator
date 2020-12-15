import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num1, setNum1] = useState('')
    const [operator, setOperator] = useState('')
    const [num2, setNum2] = useState('')
    const [equate, setEquate] = useState()


    const handleClickNums = (num) => {
        if (num1 === '' && num2 === '' && num === '0') {
            alert('Cannot start with 0')
            setNum1('')
            setNum2('')
            setOperator('')
        } else if (num2 === '' && num === '0') {
            alert('Cannot start with 0')
            setNum1('')
            setNum2('')
            setOperator('')
        } else {
            if (operator === '') {
                let newNum1 = num1.concat(num)
                setNum1(newNum1)
            } else {
                let newNum2 = num2.concat(num)
                setNum2(newNum2)
            }
        }


    }

    const handleClearDisplay = () => {
        setNum1('')
        setNum2('')
        setOperator('')
        setEquate('')
    }
    
    const handleOperator = (op) => {
        if (equate === '') {
            if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
                alert('Error two operators used back to back')
                setNum1('')
                setNum2('')
                setOperator('')
                setEquate('')
            }
        }
        setOperator(op)
    }

    const evaluate = async () => {
            if (num2 === '0' && operator ==='/') {
                alert('Cannot divide by 0')
                setNum1('')
                setNum2('')
                setOperator('')
                setEquate('')
            }
        let evaluation = eval(`${num1} ${operator} ${num2}`)
        setEquate(evaluation)
        console.log(evaluation)
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Display: {`${num1} ${operator} ${num2}`}</p>
                <div>{equate? `${equate}`: ""}</div>
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
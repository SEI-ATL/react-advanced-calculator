import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [opp, setOpp] = useState('');
    const [val, setVal] = useState('');
    const [wrong, setWrong] = useState('');

    const handleClick = (e) => {
        if (e === 'x' || e === '/' || e === '+' || e === '-') {
            if (opp.length === 1) {
                setOpp('Choose one operator')
                return
            }
            setOpp(`${opp}${e}`)
        } else if (opp === '' && num2 === '') {
            setNum1(`${num1}${e}`)
        } else {
            if (num1 != '' && num2 != '' && opp != '' && e === '=') {
                if (opp === '+') {
                    setVal(parseInt(num1) + parseInt(num2))
                } else if (opp === '-') {
                    setVal(parseInt(num1) - parseInt(num2))
                } else if (opp === 'x') {
                    setVal(parseInt(num1) x parseInt(num2))
                } else {
                    setVal(parseInt(num1) / parseInt(num2))
                }
            }
            setNum2(`${num2}${e}`)
        }
    }

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setOpp('');
        setVal('');
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num1}{opp}{num2}{value ? `${value}` : ''}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={()=> handleClear()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={()=> handleClick('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=> handleClick('7')}>7</button>
                    <button className="calc-button" onClick={()=> handleClick('8')}>8</button>
                    <button className="calc-button" onClick={()=> handleClick('9')}>9</button>
                    <button className="calc-button calc-button-op" onClick={()=> handleClick('x')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=> handleClick('4')}>4</button>
                    <button className="calc-button" onClick={()=> handleClick('5')}>5</button>
                    <button className="calc-button" onClick={()=> handleClick('6')}>6</button>
                    <button className="calc-button calc-button-op" onClick={()=> handleClick('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=> handleClick('1')}>1</button>
                    <button className="calc-button" onClick={()=> handleClick('2')}>2</button>
                    <button className="calc-button" onClick={()=> handleClick('3')}>3</button>
                    <button className="calc-button calc-button-op" onClick={()=> handleClick('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={()=> handleClick('0')}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={()=> handleClick('=')}>=</button>
                </div>
            </div>
            <h3>{wrong}</h3>
        </div>
    )
}

export default Calculator
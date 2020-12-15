import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    //const [display, setDisplay] = useState('')
    const [previousNum, setPreviousNum] = useState('')
    const [currentNum, setCurrentNum] = useState('')
    const [operator, setOperator] = useState('')
    const [solution, setSolution] = useState('')
    const [err, setErr] = useState('');


    const handleClick = (e) => {
        if (e === '+' || e === '-' || e === 'x' || e === '/') {
            if (operator.length === 1) {
                setErr('invalid input')
                return
            }
            setOperator(`${operator}${e}`)
            setErr('')
        } else if (operator === '' && previousNum === '') {
            setCurrentNum(`${currentNum}${e}`)
            } else {
                if (currentNum != '' && previousNum != '' && operator != '' && e === '=') {
                    if (operator === '+') {
                        setSolution(parseFloat(currentNum) + parseFloat(previousNum))
                    } else if (operator === '-') {
                        setSolution(parseFloat(currentNum) - parseFloat(previousNum))
                    } else if (operator === 'x') {
                        setSolution(parseFloat(currentNum) * parseFloat(previousNum))
                    } else if (operator === '/') {
                        setSolution(parseFloat(currentNum) / parseFloat(previousNum))
                    }else if (operator === '%') {// not working
                        setSolution(parseFloat(currentNum) % parseFloat(previousNum))
                    }
                }

                setPreviousNum(`${previousNum}${e}`)
            }
    }
    const handleClear = () => {
        setPreviousNum('');
        setCurrentNum('');
        setOperator('');
        //setDisplay('');
        setSolution('');
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
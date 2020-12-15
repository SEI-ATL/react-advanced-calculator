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
                <p>{currentNum}{operator}{previousNum}  </p>
                <div className="answer-box">
                    
                    {solution ? `${solution}` : ''}
                </div>
                <div className="calc-row">
                    <button 
                    className="calc-button calc-button-top" 
                    onClick={()=> handleClear()}>
                        AC
                    </button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top"
                    onClick={() => handleClick('%')}
                    >%</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => handleClick('/')}
                    >/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => handleClick('7')}
                    >7</button>
                    <button className="calc-button"
                    onClick={() => handleClick('8')}
                    >8</button>
                    <button className="calc-button"
                    onClick={() => handleClick('9')}
                    >9</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => handleClick('x')}
                    >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => handleClick('4')}
                    >4</button>
                    <button className="calc-button"
                    onClick={() => handleClick('5')}
                    >5</button>
                    <button className="calc-button"
                    onClick={() => handleClick('6')}
                    >6</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => handleClick('-')}
                    >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"
                    onClick={() => handleClick('1')}
                    >1</button>
                    <button className="calc-button"
                    onClick={() => handleClick('2')}
                    >2</button>
                    <button className="calc-button"
                    onClick={() => handleClick('3')}
                    >3</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => handleClick('+')}
                    >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"
                    onClick={() => handleClick('0')}
                    >0</button>
                    <button className="calc-button"
                    onClick={() => handleClick('.')}
                    >.</button>
                    <button className="calc-button calc-button-op"
                    onClick={() => handleClick('=')}
                    >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
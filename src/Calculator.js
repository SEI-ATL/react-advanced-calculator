import React, { useState, useEffect } from 'react'

import ClearButton from './components/ClearButton'
import DigitButton from './components/DigitButton'
import Display from './components/Display'
import EqualsButton from './components/EqualsButton'
import OperatorButton from './components/OperatorButton'

const Calculator = props => {
    const [num1, setNum1] = useState('')
    const [operator, setOperator] = useState('')
    const [num2, setNum2] = useState('')
    const [tempNum, setTempNum] = useState('')
    const [result, setResult] = useState('')
    const [shouldCalculate, setShouldCalculate] = useState(false)

    const clear = () => {
        setNum1('')
        setNum2('')
        setOperator('')
        setTempNum('')
        setResult('')
        setShouldCalculate(false)
    }

    const digitEntered = (digit) => {
       if (digit === '0' && tempNum === '') {
           // no-op
       } else if (digit === '.' && tempNum.includes('.')) {
           // no-op
       } else if (digit !== '0' && tempNum === '') {
           setTempNum(digit)
       } else if (tempNum !== '') {
           setTempNum(tempNum + digit)
       }
    }

    const operatorEntered = (op) => {
        if (tempNum === '') {
            // no-op
        } else if (tempNum !== '' && num2 !== '') {
            // no-op
        } else if (operator !== '') {
            // no-op
        } else {
            setNum1(tempNum)
            setOperator(op)
            setTempNum('')
        }
    }

    const equalsEntered = () => {
        setNum2(tempNum)
        setTempNum('')
        setShouldCalculate(true)
    }
    
    useEffect(() => {
        if (!shouldCalculate) { return }

        const parsedNum1 = parseFloat(num1)
        const parsedNum2 = parseFloat(num2)
    
        if (operator === '+') {
            setResult(parsedNum1 + parsedNum2)
        } else if (operator === '-') {
            setResult(parsedNum1 - parsedNum2)
        } else if (operator === 'x') {
            setResult(parsedNum1 * parsedNum2)
        } else if (operator === '/') {
            setResult(parsedNum1 / parsedNum2)
        }    
    }, [shouldCalculate])

    const displayForNum2 = () => {
        if (!num1) {
            return ''
        } else if (!num2) {
            return tempNum
        } else {
            return num2
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <Display num1={num1 || tempNum} operator={operator} num2={displayForNum2()} result={result}/>
                <div className="calc-row">
                    <ClearButton clear={clear}/>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <OperatorButton operator="/"operatorEntered={operatorEntered}/>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="7"/>
                    <DigitButton digitEntered={digitEntered} digit="8"/>
                    <DigitButton digitEntered={digitEntered} digit="9"/>
                    <OperatorButton operator="x" operatorEntered={operatorEntered}/>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="4" />
                    <DigitButton digitEntered={digitEntered} digit="5" />
                    <DigitButton digitEntered={digitEntered} digit="6" />
                    <OperatorButton operator="-" operatorEntered={operatorEntered}/>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="1" />
                    <DigitButton digitEntered={digitEntered} digit="2" />
                    <DigitButton digitEntered={digitEntered} digit="3" />
                    <OperatorButton operator="+" operatorEntered={operatorEntered}/>
                </div>
                <div className="calc-row">
                    <DigitButton digitEntered={digitEntered} digit="0" wide />
                    <DigitButton digitEntered={digitEntered} digit="." />
                    <EqualsButton equalsEntered={equalsEntered}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator
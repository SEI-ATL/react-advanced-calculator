import React, { useState } from 'react'

function Calculator(props) {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operator, setOperator] = useState("")
    const [value, setValue] = useState("")
    const [unavailable, setUnavailable] = useState("")

    const handleClick = (e) => {
        console.log(e);
        if (e === "x" || e === "-" || e === "/" || e === "+") {
            if (operator.length === 1) {
                setUnavailable("Cannot use more than one operator")
                return
            }
            setOperator(`${operator}${e}`)
            setUnavailable("")
        } else if (operator === "" && num2 === "") {
            if (e === "0" && num1 === "") {
                setUnavailable("First number can't be a 0")
                return
            }
            setNum1(`${num1}${e}`)
            setUnavailable("")
        } else {
            if (num1 !== "" && num2 !== "" && operator !== "" && e === "=") {
                if (operator === "+") {
                    setValue(parseInt(num1) + parseInt(num2))
                    setUnavailable("")
                } else if (operator === "-") {
                    setValue(parseInt(num1) - parseInt(num2))
                } else if (operator === "/") {
                    setValue(parseInt(num1) / parseInt(num2))
                    setUnavailable("")
                } else {
                    setValue(parseInt(num1) * parseInt (num2))
                    setUnavailable("")
                }
            }
            if (e === "0" && num2 === "") {
                setUnavailable("First number cannot be a 0")
                return;
            }
            setNum2(`${num2}${e}`)
            setUnavailable("")
        }
    }

    const handleClear = () => {
        setValue("")
        setNum1("")
        setNum2("")
        setOperator("")
        setUnavailable("")
    }
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{value ? `${value}` : ""}</p>
                <div className="answer-box">
                    {num1}{operator}{num2}
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClear()} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={() => handleClick("/")} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick("7")} className="calc-button">7</button>
                    <button onClick={() => handleClick("8")} className="calc-button">8</button>
                    <button onClick={() => handleClick("9")} className="calc-button">9</button>
                    <button onClick={() => handleClick("x")} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick("4")} className="calc-button">4</button>
                    <button onClick={() => handleClick("5")} className="calc-button">5</button>
                    <button onClick={() => handleClick("6")} className="calc-button">6</button>
                    <button onClick={() => handleClick("-")} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick("1")} className="calc-button">1</button>
                    <button onClick={() => handleClick("2")} className="calc-button">2</button>
                    <button onClick={() => handleClick("3")} className="calc-button">3</button>
                    <button onClick={() => handleClick("+")} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => handleClick("0")} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={() => handleClick("=")} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
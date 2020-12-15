import React, { useState } from 'react'

const Calculator = props => {
    
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operator, setOperator] = useState("")
    const [value, setValue] = useState("")
    const [nope, setNope] = useState("")

    const handleClear= () => {
        setNum1("")
        setNum2("")
        setOperator("")
        setValue("")
        setNope("")
    }

    const handleOperation=(e) => {

        
        if (e === "x" || e === "-" || e === "/" || e === "+") {
            if (operator.length === 1) {
            setNope(`Nope, you already click ${e}`)
            return
            }
            setOperator(`${operator}${e}`)
            setNope("")
        } else if (operator === "" && num2 === "") {
            if (e === "0" && num1 === "") {
                setNope("First number can't be a 0!")
                return
            }
             setNum1(`${num1}${e}`)
             setNope("")
        } else {
            if (num1 !== "" && num2 !== "" && operator !== "" && e === "=") {
                if (operator === "+") {
                    setValue(parseInt(num1) + parseInt(num2))
                    setNope("")
                } else if (operator === "-") {
                    setValue(parseInt(num1) - parseInt(num2))
                    setNope("")
                } else if (operator === "/") {
                    setValue(parseInt(num1) / parseInt(num2))
                    setNope("")
                } else {
                    setValue(parseInt(num1) * parseInt(num2))
                    setNope("")
                }
            }
            if (e === "0" && num2 === "") {
                setNope("First number can't be a 0!")
                return
            }
            setNum2(`${num2}${e}`)
            setNope("")
        }
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num1}{operator}{num2}{value ? `${value}` : ""} </div>
                <div className="calc-row">
                    <button onClick = {()=> handleClear()} className="calc-button calc-button-top">AC</button>
                    <button onClick = {()=> handleOperation("+")}  className="calc-button calc-button-top">+/-</button>
                    <button onClick = {()=> handleOperation("%")}  className="calc-button calc-button-top">%</button>
                    <button onClick = {()=> handleOperation("/")}  className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick = {()=> handleOperation("7")} className="calc-button">7</button>
                    <button onClick = {()=> handleOperation("8")} className="calc-button">8</button>
                    <button onClick = {()=> handleOperation("9")} className="calc-button">9</button>
                    <button onClick = {()=> handleOperation("x")} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick = {()=> handleOperation("4")} className="calc-button">4</button>
                    <button onClick = {()=> handleOperation("5")} className="calc-button">5</button>
                    <button onClick = {()=> handleOperation("6")} className="calc-button">6</button>
                    <button onClick = {()=> handleOperation("-")} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick = {()=> handleOperation("1")} className="calc-button">1</button>
                    <button onClick = {()=> handleOperation("2")} className="calc-button">2</button>
                    <button onClick = {()=> handleOperation("3")} className="calc-button">3</button>
                    <button onClick = {()=> handleOperation("+")} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick = {()=> handleOperation("0")}  className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick = {()=> handleOperation("=")}  className="calc-button calc-button-op">=</button>
                </div>
            </div>
            <h3>{nope}</h3>
        </div>
    )
}

export default Calculator
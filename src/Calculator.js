import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num1,setNum1 ] = useState('')
    const [num2, setNum2] = useState('')
    const [operator,setOperator] = useState('')
    const [value, setValue]= useState('')
    const [noCanDo, setNoCanDo] = useState("")
    
    const handleClick=(e) => {

        
        if (e === "x" || e === "-" || e === "/" || e === "+") {
            if (operator.length === 1) {
            setNoCanDo("Can't have more than one operator Pick a number")
            return
            }
            setOperator(`${operator}${e}`)
            setNoCanDo("")
        } else if (operator === "" && num2 === "") {
            if (e === "0" && num1 === "") {
                setNoCanDo("First number can't be a 0")
                return
            }
             setNum1(`${num1}${e}`)
             setNoCanDo("")
        } else {
            if (num1 !== "" && num2 !== "" && operator !== "" && e === "=") {
                if (operator === "+") {
                    setValue(parseInt(num1) + parseInt(num2))
                    setNoCanDo("")
                } else if (operator === "-") {
                    setValue(parseInt(num1) - parseInt(num2))
                    setNoCanDo("")
                } else if (operator === "/") {
                    setValue(parseInt(num1) / parseInt(num2))
                    setNoCanDo("")
                } else {
                    setValue(parseInt(num1) * parseInt(num2))
                    setNoCanDo("")
                }
            }
            console.log('INSIDE SET NUM 2')
            if (e === "0" && num2 === "") {
                setNoCanDo("First number can't be a 0")
                return
            }
            setNum2(`${num2}${e}`)
            setNoCanDo("")
        }
    }

    

    const handleClear = () =>{
        setValue("")
        setNum1("")
        setOperator("")
        }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box"> {num1}{operator}{num2}  {value ? `${value}` : ""} </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={()=> handleClear()}  >AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick = {()=>handleClick('/')} >/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick = {()=>handleClick(7)}>7</button>
                    <button className="calc-button" onClick = {()=>handleClick(8)} >8</button>
                    <button className="calc-button" onClick = {()=>handleClick(9)} >9</button>
                    <button className="calc-button calc-button-op"onClick = {()=>handleClick('x')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick = {()=>handleClick(4)} >4</button>
                    <button className="calc-button" onClick = {()=>handleClick(5)}>5</button>
                    <button className="calc-button" onClick = {()=>handleClick(6)} >6</button>
                    <button className="calc-button calc-button-op"onClick = {()=>handleClick('-')} >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick = {()=>handleClick(1)} >1</button>
                    <button className="calc-button" onClick = {()=>handleClick(2)} >2</button>
                    <button className="calc-button" onClick = {()=>handleClick(3)} >3</button>
                    <button className="calc-button calc-button-op" onClick = {()=>handleClick('+')} >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick = {()=>handleClick(0)} >0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
            <h3>{noCanDo}</h3>
        </div>
    )
}

export default Calculator
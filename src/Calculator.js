import React, { useState, useEffect } from 'react'
import AnswerBox from './AnswerBox';

let clickCount = 0;
let plusResult = 0;

const Calculator = props => {
    // Declare state variables
const [numberOne, setNumberOne] = useState(0);
const [numberTwo, setNumberTwo] = useState(0);
const [operator, setOperator] = useState('@@@');
const [result, setResult] = useState(0)
const [display, setDisplay] = useState('wait')
const [mitai, setMitai] = useState('')

 const whichNumber=async(e)=>{
     if(display ==="wait"){
        setDisplay('firstNumber')
     }
 else if(display==="operator"){
     setDisplay('secondNumber')
 }
 if(clickCount === 0){
  
     await setNumberOne(parseFloat(e.target.value))
     
     
     
     clickCount = 1;
 }else{

     
     await setNumberTwo(parseFloat(e.target.value))
     
     
     clickCount = 0;
 }
}

const opureita = async(e)=>{
    await setOperator(e.target.value)
    setDisplay('operator')
}

const showEnd=()=>{
    setDisplay('result')
}






useEffect(()=>{
    console.log(numberOne+'###'+operator+'###'+numberTwo+'###')
    if(operator === 'purasu'){
        const end  = numberOne+numberTwo
        setResult(end )
        console.log('Result heeeeere'+result)
    }else if(operator === 'mainusu'){
        const end  = numberOne-numberTwo
        setResult(end )
        console.log('Result heeeeere'+result)
    }else if(operator === 'muricupurai'){
        const end = numberOne * numberTwo
        setResult(end )
        console.log('Result heeeeere'+result)
    }else if(operator === 'dibaido'){
        const end = numberOne / numberTwo
        setResult(end )
        console.log('Result heeeeere'+result)
    }
    if(display==='firstNumber'){
        setMitai(numberOne)
    }else if(display==='operator'){
        setMitai(operator)
    }else if(display==='secondNumber'){
        setMitai(numberTwo)
    }else if(display==='result'){
        setMitai(result)
    }
})









    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <AnswerBox result={result} display={display} mitai={mitai}/>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" >%</button>
                    <button className="calc-button calc-button-op" value="dibaido" onClick={opureita}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={7} onClick={whichNumber}>7</button>
                    <button className="calc-button" value={8} onClick={whichNumber}>8</button>
                    <button className="calc-button" value={9} onClick={whichNumber}>9</button>
                    <button className="calc-button calc-button-op" value="muricupurai" onClick={opureita}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={4} onClick={whichNumber}>4</button>
                    <button className="calc-button" value={5} onClick={whichNumber}>5</button>
                    <button className="calc-button" value={6} onClick={whichNumber}>6</button>
                    <button className="calc-button calc-button-op" value="mainusu" onClick={opureita}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={1} onClick={whichNumber}>1</button>
                    <button className="calc-button" value={2} onClick={whichNumber}>2</button>
                    <button className="calc-button" value={3} onClick={whichNumber}>3</button>
                    <button className="calc-button calc-button-op" value="purasu" onClick={opureita}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value={0} onClick={whichNumber}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={showEnd}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator





   
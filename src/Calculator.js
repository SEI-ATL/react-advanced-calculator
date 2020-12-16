import React, { useState, useEffect } from 'react'
import AnswerBox from './AnswerBox';

let firstNumberOn=0;
let secondNumberOn=0;

const Calculator = props => {
    // Declare state variables
const [numberOne, setNumberOne] = useState(0);
const [numberTwo, setNumberTwo] = useState(0);
const [operator, setOperator] = useState('@@@');
const [result, setResult] = useState(0)
const [display, setDisplay] = useState('wait')
const [mitai, setMitai] = useState(0)
const [negative, setNegative] = useState(false)
const [percent, setPercent] = useState(false)

 const whichNumber=async(e)=>{
     if(display ==="wait"||display ==="firstNumber"){
        firstNumberOn = firstNumberOn + (e.target.value)
        
        setDisplay('firstNumber')
        await setNumberOne(parseFloat(firstNumberOn))
     }
 else if(display==="operator"|| display ==="secondNumber"){
    secondNumberOn = secondNumberOn + (e.target.value)
     setDisplay('secondNumber')
     await setNumberTwo(parseFloat(secondNumberOn))
 }

}

const deffault =()=>{
    setNumberOne(0);
    setNumberTwo(0);
    setOperator('@@@');
    setResult(0)
    setDisplay('wait')
    setMitai(0)
    firstNumberOn=0;
    secondNumberOn=0;   
}

const negativE =()=>{
    setNegative(true)
}

const percenT =()=>{
    setPercent(true)
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
    if(operator === '+'){
        const end  = numberOne+numberTwo
        setResult((end).toFixed(2) )
        console.log('Result heeeeere'+parseFloat(result))
    }else if(operator === '-'){
        const end  = numberOne-numberTwo
        setResult((end).toFixed(2) )
        console.log('Result heeeeere'+parseFloat(result))
    }else if(operator === 'x'){
        const end = numberOne * numberTwo
        setResult((end).toFixed(2) )
        console.log('Result heeeeere'+parseFloat(result))
    }else if(operator === '/'){
        const end = numberOne / numberTwo
        setResult((end).toFixed(2) )
        console.log('Result heeeeere'+parseFloat(result))
    }
    if(display==='firstNumber'){
        setMitai(numberOne)
    }else if(display==='operator'){
        setMitai(operator)
    }else if(display==='secondNumber'){
        setMitai(numberTwo)
    }else if(display==='result'){
        setMitai(parseFloat(result))
    }
    if(negative===true&display==="firstNumber"){
     
        firstNumberOn = firstNumberOn - (firstNumberOn * 2)
        setNumberOne(firstNumberOn)
        setNegative(false)
    }
    
    if(negative===true&display==="secondNumber"){
       
        secondNumberOn =  secondNumberOn - (secondNumberOn * 2)
        setNumberTwo(secondNumberOn)
        setNegative(false)
    }

    if(percent===true&display==="firstNumber"){
       
        firstNumberOn = firstNumberOn * 0.01
        setNumberOne(firstNumberOn)
        setPercent(false)
    }

    if(percent===true&display==="secondNumber"){
       
        secondNumberOn =  secondNumberOn * 0.01
        setNumberTwo(secondNumberOn)
        setPercent(false)
    }



})









    return (
        <div className="container">
            <h1>リアークトの電卓</h1>
            <div className="calc-container">
                <p>Values: </p>
                <AnswerBox result={result} display={display} mitai={mitai}/>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={deffault}>AC</button>
                    <button className="calc-button calc-button-top" onClick={negativE}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={percenT}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={opureita}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={7} onClick={whichNumber}>7</button>
                    <button className="calc-button" value={8} onClick={whichNumber}>8</button>
                    <button className="calc-button" value={9} onClick={whichNumber}>9</button>
                    <button className="calc-button calc-button-op" value="x" onClick={opureita}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={4} onClick={whichNumber}>4</button>
                    <button className="calc-button" value={5} onClick={whichNumber}>5</button>
                    <button className="calc-button" value={6} onClick={whichNumber}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={opureita}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={1} onClick={whichNumber}>1</button>
                    <button className="calc-button" value={2} onClick={whichNumber}>2</button>
                    <button className="calc-button" value={3} onClick={whichNumber}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={opureita}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value={0} onClick={whichNumber}>0</button>
                    <button className="calc-button"　value={'.'} onClick={whichNumber}>.</button>
                    <button className="calc-button calc-button-op" onClick={showEnd}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator





   
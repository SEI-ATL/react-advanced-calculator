import React, { useState, useEffect } from 'react'

let clickCount = 0;

const Calculator = props => {
    // Declare state variables
const [numberOne, setNumberOne] = useState(null);
const [numberTwo, setNumberTwo] = useState(null);
const [operator, setOperator] = useState('@@@');
const [result, setResult] = useState('')

 const whichNumber=async(e)=>{
 if(clickCount === 0){
  
     await setNumberOne(e.target.value)
     
     
     
     clickCount = 1;
 }else{

     
     await setNumberTwo(e.target.value)
     
     
     clickCount = 0;
 }
}

const opureita = async(e)=>{
    await setOperator(e.target.value)
}

const resoruto = (e) => {
    if(operator === 'purasu'){
        console.log('プラソだよ')
    }else if(operator === 'mainusu'){
        console.log('マイヌスだよ')
       }else if(operator === 'muricupurai'){
        console.log('ムリツプライだよ')
    }else{
        console.log('ヂバイドだよ')
    }
    
    console.log(result)
}


useEffect(()=>{
    console.log(numberOne+'###'+operator+'###'+numberTwo+'###')
    setResult(`${numberOne}and${operator}and${numberTwo} вот так братуха`)
    
      

})





    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
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
                    <button className="calc-button calc-button-op" onClick={resoruto}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
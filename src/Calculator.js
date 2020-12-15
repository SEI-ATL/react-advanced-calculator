import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [currentNum, setCurrentNum] = useState(0);
    const [operator, setOperator] = useState('');
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    // how to append digits, then stop appending when an operator is assigned
    function setNum(e, num) {
      if (currentNum.num != 0) {
        let string = "" + currentNum.num + num;
        let newNum = parseInt(string);
        // console.log(stringNum);
        setCurrentNum({num: string});
      } else {
        setCurrentNum({num: num})
      }
      return currentNum.num;
    }

    function posToNeg(e) {
      if (currentNum.num > 0) {
        let negative = -Math.abs(currentNum.num);
        setCurrentNum({num: negative});
      } else if (currentNum.num <= 0) {
        let positive = Math.abs(currentNum.num);
        setCurrentNum({num: positive});
      }
      return currentNum.num;
    }

    function percent() {
      let float = parseFloat(currentNum.num);
      // console.log(float);
      let percent = float * 0.01;
      setCurrentNum({num: percent});
      return currentNum.num;
    }

    function clear(e) {
      setCurrentNum({num: 0});

    }

    function changeOperator(e, op) {
      // something to stop appending digits here
      setOperator({op: op});
      return operator.op;
    }

    function equals(e) {
      if (operator.op === '+') {
        let sum = firstNum.num + secondNum.num;
        setCurrentNum({num: sum});
      } else if (operator.op === '-') {
        let diff = firstNum.num - secondNum.num;
        setCurrentNum({num: diff});
      } else if (operator.op === 'x') {
        let prod = firstNum.num * secondNum.num;
        setCurrentNum({num: prod})
      } else if (operator.op === '/') {
        let quot = firstNum.num / secondNum.num;
      }
    }
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{currentNum.num}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={ (e) => {clear(e)}}>AC</button>
                    <button className="calc-button calc-button-top" onClick={ (e) => {posToNeg(e)}}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={ (e) => {percent(e)}}>%</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => {changeOperator(e, '/')}}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={ (e) => {setNum(e, 7)} }>7</button>
                    <button className="calc-button" onClick={ (e) => {setNum(e, 8)} }>8</button>
                    <button className="calc-button" onClick={ (e) => {setNum(e, 9)} }>9</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => {changeOperator(e, 'x')}}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={ (e) => {setNum(e, 4)} }>4</button>
                    <button className="calc-button" onClick={ (e) => {setNum(e, 5)} }>5</button>
                    <button className="calc-button" onClick={ (e) => {setNum(e, 6)} }>6</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => {changeOperator(e, '-')}}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={ (e) => {setNum(e, 1)} }>1</button>
                    <button className="calc-button" onClick={ (e) => {setNum(e, 2)} }>2</button>
                    <button className="calc-button" onClick={ (e) => {setNum(e, 3)} }>3</button>
                    <button className="calc-button calc-button-op" onClick={ (e) => {changeOperator(e, '+')}}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={ (e) => {setNum(e, 0)} }>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator

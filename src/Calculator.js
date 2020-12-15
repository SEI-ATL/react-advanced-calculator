import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [currentNum, setCurrentNum] = useState(0);
    const [operator, setOperator] = useState('');
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    // how to append digits, then stop appending when an operator is assigned
    // how to remove initial undefined state for currentNum
    function setNum(e, num) {
      if (currentNum.num !== 0) {
        let string = "" + currentNum.num + num;
        let newNum = parseInt(string);
        console.log(newNum);
        setCurrentNum({num: newNum});
        // console.log(currentNum.num);
      } else {
        setCurrentNum({num: num})
      }

    }

    function posToNeg(e) {
      if (currentNum.num > 0) {
        let negative = -Math.abs(currentNum.num);
        setCurrentNum({num: negative});
      } else if (currentNum.num <= 0) {
        let positive = Math.abs(currentNum.num);
        setCurrentNum({num: positive});
      }

    }

    function float(e) {
      let float = parseFloat(currentNum.num);
      // how to simply append a . to currentNum? Does parseFloat work on a string like this?
      setCurrentNum({num: float});

    }
    function percent(e) {
      let float = parseFloat(currentNum.num);
      // console.log(float);
      let percent = float * 0.01;
      setCurrentNum({num: percent});

    }

    function clear(e) {
      setCurrentNum({num: 0});
      setFirstNum({num: 0});
      setSecondNum({num: 0});
    }

    function changeOperator(e, op) {
      let current = currentNum.num;
      setFirstNum({num: current});
      console.log(firstNum.num);
      // then reset currentNum.num - do this asynchronously?
      setOperator({op: op});

    }

    function equals(e) {
      setSecondNum({num: currentNum.num});
      if (operator.op === '+') {
        let sum = firstNum.num + secondNum.num;
        setCurrentNum({num: sum});
        setFirstNum({num: 0});
        setSecondNum({num: 0})
      } else if (operator.op === '-') {
        let diff = firstNum.num - secondNum.num;
        setCurrentNum({num: diff});
        setFirstNum({num: 0});
        setSecondNum({num: 0})
      } else if (operator.op === 'x') {
        let prod = firstNum.num * secondNum.num;
        setCurrentNum({num: prod})
        setFirstNum({num: 0});
        setSecondNum({num: 0})
      } else if (operator.op === '/') {
        let quot = firstNum.num / secondNum.num;
        setCurrentNum({num: quot})
        setFirstNum({num: 0});
        setSecondNum({num: 0})
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
                    <button className="calc-button calc-button-op"onClick={ (e) => {equals(e)} }>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator

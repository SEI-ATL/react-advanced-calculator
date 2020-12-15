import React, { useState } from 'react';

const Calculator = (props) => {
  // Declare state variables
  const [storedNum, setStoredNum] = useState(0);
  const [displayedNum, setDisplayedNum] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');
  const [calculateMode, setCalculateMode] = useState(false);

  const handleClickNum = (num) => {
    if ((displayedNum === '0' && num !== '.') || calculateMode) {
      setStoredNum(Number(displayedNum));
      setDisplayedNum(num);
      setCalculateMode(false);
      resetButtons();
    } else {
      setDisplayedNum(displayedNum + num);
    }
  };

  const handleClickOperator = (event, operator) => {
    resetButtons();
    switch (currentOperator) {
      case '+':
        setDisplayedNum(storedNum + Number(displayedNum));
        break;
      case '-':
        setDisplayedNum(storedNum - Number(displayedNum));
        break;
      case '*':
        setDisplayedNum(storedNum * Number(displayedNum));
        break;
      case '/':
        setDisplayedNum(storedNum / Number(displayedNum));
        break;
    }
    setCurrentOperator(operator);
    setCalculateMode(true);
    if (operator !== '=') {
      event.target.classList.add('calc-button-op-selected');
    }
  };

  const resetButtons = () => {
    if (document.querySelector('.calc-button-op-selected')) {
      document.querySelector('.calc-button-op-selected').classList.remove('calc-button-op-selected');
    }
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values: </p>
        <div className="answer-box">{displayedNum}</div>
        <div className="calc-row">
          <button
            className="calc-button calc-button-top"
            onClick={() => {
              setDisplayedNum('0');
              setCurrentOperator('');
              setStoredNum(0);
              setCalculateMode(false);
              resetButtons();
            }}
          >
            AC
          </button>
          <button className="calc-button calc-button-top">+/-</button>
          <button className="calc-button calc-button-top">%</button>
          <button className="calc-button calc-button-op" onClick={(event) => handleClickOperator(event, '/')}>
            /
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={() => handleClickNum('7')}>
            7
          </button>
          <button className="calc-button" onClick={() => handleClickNum('8')}>
            8
          </button>
          <button className="calc-button" onClick={() => handleClickNum('9')}>
            9
          </button>
          <button className="calc-button calc-button-op" onClick={(event) => handleClickOperator(event, '*')}>
            x
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={() => handleClickNum('4')}>
            4
          </button>
          <button className="calc-button" onClick={() => handleClickNum('5')}>
            5
          </button>
          <button className="calc-button" onClick={() => handleClickNum('6')}>
            6
          </button>
          <button className="calc-button calc-button-op" onClick={(event) => handleClickOperator(event, '-')}>
            -
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={() => handleClickNum('1')}>
            1
          </button>
          <button className="calc-button" onClick={() => handleClickNum('2')}>
            2
          </button>
          <button className="calc-button" onClick={() => handleClickNum('3')}>
            3
          </button>
          <button className="calc-button calc-button-op" onClick={(event) => handleClickOperator(event, '+')}>
            +
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button width-2" onClick={() => handleClickNum('0')}>
            0
          </button>
          <button className="calc-button" onClick={() => handleClickNum('.')}>
            .
          </button>
          <button className="calc-button calc-button-op" onClick={(event) => handleClickOperator(event, '=')}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

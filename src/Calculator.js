import React, { useState } from "react";

const Calculator = (props) => {
  // Declare state variables
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState('');
  const [decimalStatus, setDecimalStatus] = useState(false);

  const handleClick = (value) => {
    if (num1 && operator) {
      return setNum2(`${num2}${value}`);
    } else {
      return setNum1(`${num1}${value}`);
    }
  };

  const operation = (value) => {
    if(operator !== '') {
      return
    } else {
    decimalDisabled();
    return setOperator(value);
    }
  };


  const evaluate = () => {
    if (operator === "+") {
      setDisplay(parseFloat(num1) + parseFloat(num2));
    } else if (operator === "-") {
      setDisplay(parseFloat(num1) - parseFloat(num2));
    } else if (operator === "x") {
      setDisplay(parseFloat(num1) * parseFloat(num2));
    } else {
      setDisplay(parseFloat(num1) / parseFloat(num2));
    }
  };

  const decimalDisabled = () => {
    return decimalStatus === true
      ? setDecimalStatus(false)
      : setDecimalStatus(true);
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>
          Values: {num1} {operator} {num2}{" "}
        </p>
        <div className="answer-box">{display}</div>
        <div className="calc-row">
          <button
            onClick={() => {
              setNum1("");
              setNum2("");
              setOperator("");
              setDisplay("");
              setDecimalStatus(false);
            }}
            className="calc-button calc-button-top"
          >
            AC
          </button>
          <button className="calc-button calc-button-top">+/-</button>
          <button onClick={() => {}} className="calc-button calc-button-top">
            %
          </button>
          <button
            onClick={() => operation("/")}
            className="calc-button calc-button-op"
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleClick("7")} className="calc-button">
            7
          </button>
          <button onClick={() => handleClick("8")} className="calc-button">
            8
          </button>
          <button onClick={() => handleClick("9")} className="calc-button">
            9
          </button>
          <button
            onClick={() => operation("x")}
            className="calc-button calc-button-op"
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleClick("4")} className="calc-button">
            4
          </button>
          <button onClick={() => handleClick("5")} className="calc-button">
            5
          </button>
          <button onClick={() => handleClick("6")} className="calc-button">
            6
          </button>
          <button
            onClick={() => operation("-")}
            className="calc-button calc-button-op"
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => handleClick("1")} className="calc-button">
            1
          </button>
          <button onClick={() => handleClick("2")} className="calc-button">
            2
          </button>
          <button onClick={() => handleClick("3")} className="calc-button">
            3
          </button>
          <button
            onClick={() => operation("+")}
            className="calc-button calc-button-op"
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button
            onClick={() => 
                handleClick("0")}
                className="calc-button width-2"
          >
            0
          </button>
          <button
            onClick={() => {
              handleClick(".");
              decimalDisabled();
            }}
            className="calc-button"
            disabled={decimalStatus}
          >
            .
          </button>
          <button
            onClick={() => evaluate()}
            className="calc-button calc-button-op"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

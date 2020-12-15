import React, { useState, useEffect } from "react";

const Calculator = () => {
  // Declare state variables
  const [inputs, setInputs] = useState([]);
  const [numString, setNumString] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState("");
  const [calculateResult, setCalculateResult] = useState(false);

  useEffect(() => {
      console.log("hit effect");
      if (calculateResult) {
        calculate()
        setCalculateResult(false);
      }
  }, [calculateResult]);


  function calculate() {
    console.log("calculating");
    let result = eval(inputs.join(" "));
    setNumString("");
    setInputs([result]);
    setResultDisplayed(result);
  }

  function readInput(num) {
    if (typeof inputs[inputs.length - 1] == "number") {
        return;
    }
    let currentValue = numString + num;
    setNumString(currentValue);
  }

  function includeOperator(opp) {
    if (typeof inputs[inputs.length - 1] == "number") {
        setInputs([...inputs, opp]);
    } else {
        setInputs([...inputs, parseInt(numString), opp]);
        setNumString("");
    }
  }

  function allClear() {
    setInputs([]);
    setNumString("");
    setResultDisplayed("");
    setCalculateResult(false);
  }

  function evaluate() {
    if (parseInt(numString)) {
      setInputs([...inputs, parseInt(numString)]);
      setCalculateResult(true);
    } else {
      console.log("that was an operator");
    }
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values: {numString}</p>
        <div className="answer-box">{resultDisplayed}</div>
        <div className="calc-row">
          <button onClick={allClear} className="calc-button calc-button-top">
            AC
          </button>
          <button className="calc-button calc-button-top">+/-</button>
          <button className="calc-button calc-button-top">%</button>
          <button
            onClick={() => includeOperator("/")}
            className="calc-button calc-button-op"
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => readInput(7)} className="calc-button">
            7
          </button>
          <button onClick={() => readInput(8)} className="calc-button">
            8
          </button>
          <button onClick={() => readInput(9)} className="calc-button">
            9
          </button>
          <button
            onClick={() => includeOperator("*")}
            className="calc-button calc-button-op"
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => readInput(4)} className="calc-button">
            4
          </button>
          <button onClick={() => readInput(5)} className="calc-button">
            5
          </button>
          <button onClick={() => readInput(6)} className="calc-button">
            6
          </button>
          <button
            onClick={() => includeOperator("-")}
            className="calc-button calc-button-op"
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => readInput(1)} className="calc-button">
            1
          </button>
          <button onClick={() => readInput(2)} className="calc-button">
            2
          </button>
          <button onClick={() => readInput(3)} className="calc-button">
            3
          </button>
          <button
            onClick={() => includeOperator("+")}
            className="calc-button calc-button-op"
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button onClick={() => readInput(7)} className="calc-button width-2">
            0
          </button>
          <button className="calc-button">.</button>
          <button onClick={evaluate} className="calc-button calc-button-op">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

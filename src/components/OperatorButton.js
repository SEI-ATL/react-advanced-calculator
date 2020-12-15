import React from 'react'

function OperatorButton(props) {
  return(
    <button
      className="calc-button calc-button-op"
      onClick={() => props.operatorEntered(props.operator)}
    >
      {props.operator}
    </button>  
  )
}

export default OperatorButton
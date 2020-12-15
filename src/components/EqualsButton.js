import React from 'react'

function EqualsButton(props) {
  return(
    <button
      className="calc-button calc-button-op"
      onClick={props.equalsEntered}
    >
      =
    </button>
  )
}

export default EqualsButton
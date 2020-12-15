import React from 'react'

function ClearButton(props) {
  return(
    <button
      className="calc-button calc-button-top"
      onClick={props.clear}
    >
      AC
    </button>
  )
}

export default ClearButton
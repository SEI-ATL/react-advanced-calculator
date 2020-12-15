import React from 'react'

function EqualButton(props) {
    return (
        <button 
            className="calc-button calc-button-op"
            onClick={props.equalEntered}
        >
            =
        </button>
    )
}

export default EqualButton
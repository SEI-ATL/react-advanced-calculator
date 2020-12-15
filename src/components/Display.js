import React from 'react'

function Display(props) {
  let resultString = `${props.num1} ${props.operator} ${props.num2}`

  if (props.result) {
    resultString += ` = ${props.result}`
  }
  
  return(
    <div className="answer-box">
      {resultString}
    </div>
  )
}

export default Display
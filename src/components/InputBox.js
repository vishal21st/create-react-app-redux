import React from 'react'


const handleKeyUp = (e, handler) => {
  const value = e.target.value
  handler(value)
}


const InputBox = (props) => {
  let {inputText}   = props
  return (
    <input value={inputText} 
    className="form-control" 
    onChange={(e) => handleKeyUp(e, props.handleKeyUp)}/> 
  )
}

export default InputBox
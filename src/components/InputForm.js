import React from 'react'

import InputBox from './InputBox'
import Button from './Button'

const Error = (props) => {
  let {error} =  props
  if (error !== "") {
    return (
      <div className="error-block">{props.error}</div>
    )
  }
  return ""
}

const InputForm = (props) => {
  let {inputText, handleKeyUp, handleSubmit, isSaving, error} = props
  return (
    <form className="input-form" 
      onSubmit={ e => e.preventDefault()}>
      <div className="input-group">
        <InputBox inputText={inputText} handleKeyUp={handleKeyUp}/>
        <Button text="Add" 
          onClick={() => handleSubmit() } loading={isSaving}
          disabled={error !== ""}/>
      </div>
      <Error error={error}/>
    </form>
  )
}


export default InputForm
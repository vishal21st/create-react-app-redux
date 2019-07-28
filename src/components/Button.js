import React from 'react'
import Loader from './Loader'
function buttonInner(props) {
  let { text, loading } = props
  if (loading) {
    return <Loader/>
  } else {
    return text
  }
}

const Button = (props) => {
  let {onClick, loading, disabled} = props
  return (
    <button className="button button-primary form-control" 
      disabled={loading || disabled} onClick={onClick}>
      {buttonInner(props)}
    </button>
  )
}


export default Button
import React from 'react'

const List = (props) => {
  let {number} = props
  return (
    <li className={`pill ${number.isDuplicate ? "--red" : ""}`}>
      {number.value}
    </li>
  )
}

const NumberList = (props) => {
  let {numbers, numbersByValue} = props
  return (
    <ul>
      {numbers.map((n, index) => {
        return (<List key={index} number={numbersByValue[n]}/>)
      })}
    </ul>
  )
}

export default NumberList
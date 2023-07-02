import React from 'react'
import './style.scss'

interface InputInteface{
    type: string
    value: any
    callBackFunction: Function
    placeholder: string
}

const Input = ({ type,value,callBackFunction,placeholder }:InputInteface) => {
  return (
    <label>
      <input className='input' type={type} placeholder={placeholder} onChange={(e)=>callBackFunction(e)} value={value} />
    </label>
  )
}

export default Input
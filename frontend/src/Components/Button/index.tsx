import React from 'react'
import './style.scss'

interface ButtonInterface{
    label:string
    action:Function
    styles: any
}

const Button = ({ label='Click',action=()=>{}, styles={} }:ButtonInterface) => {
  return (
    <button className='btn' style={styles} onClick={()=>action()} >{ label }</button>
  )
}

export default Button
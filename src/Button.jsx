import React from 'react'

const Button = ({name , fucn}) => {
  return (
    <button className='border' onClick={fucn}>{name}</button>
  )
}

export default Button
import React from 'react'

const Button = ({text , className, onclick}) => {
  return (
    <>
      <button onClick={onclick} className={` text-white px-4 py-2  rounded-md ${className}`}>{text}</button>
    </>
  )
}

export default Button

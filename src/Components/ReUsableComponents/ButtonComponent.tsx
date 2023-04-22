import React from 'react'

const ButtonComponent = (props:any) => {
  return (
    <>
      <button type='submit' className={`btn btn-primary ${props.className}`}>{props.label}</button>
    </>
  )
}

export default ButtonComponent

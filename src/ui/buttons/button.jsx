import React from 'react'

const button = ({value, color}) => {
  return (
    <button className={color}>{value}</button>
  )
}

export default button
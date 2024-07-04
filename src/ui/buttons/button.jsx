import React from 'react'

const button = ({value, width, color}) => {
  return (
    <button style={{width:`${width}%`}} className={`btn-${color}`}>{value}</button>
  )
}

export default button
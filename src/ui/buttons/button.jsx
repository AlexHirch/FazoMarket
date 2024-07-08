import React from 'react'

const MyButton = ({value, width, color}) => {
  return (
    <button style={{width:`${width}%`}} className={`btn-${color}`}>{value}</button>
  )
}

export default MyButton
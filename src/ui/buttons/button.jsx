import React from 'react'
import { useNavigate } from "react-router-dom";

const MyButton = ({value, width, color, navigates, type1}) => {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(navigates)} style={{width:`${width}%`}} className={`btn-${color}`} type={type1}>{value}</button>
  )
}

export default MyButton
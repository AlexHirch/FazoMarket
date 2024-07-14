import React from 'react'
import { useNavigate } from 'react-router-dom'

const Infobar = ({ setToggleState }) => {
  const navigate = useNavigate()
  const navigatetoss = (i)=>{
    setToggleState(i)
    navigate("/installment")
  }
  return (
    <div className='Infobar'>
        <p><i className="fa-solid fa-location-dot"></i> Ташкент</p>
        <p onClick={()=> navigatetoss(7)}>Наши магазины</p>
        <p onClick={()=> navigatetoss(9)}>B2B продажи</p>
        <p onClick={()=> navigatetoss(1)}>Покупка в рассрочку</p>
        <p onClick={()=> navigatetoss(2)}>Способы оплаты</p>
        <p onClick={()=> navigatetoss(3)}>Гарантия на товары</p>
        <p><i className="fa-solid fa-phone"></i>+998 95 123 55 88</p>
    </div>
  )
}

export default Infobar
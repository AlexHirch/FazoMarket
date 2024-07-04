import React from 'react'
import { Filter, ProductCheaperCart } from '../../ui'
import { useNavigate } from 'react-router-dom'

const ProductFilter = () => {
  const navigate = useNavigate()
  return (
    <div className='ProductFilter'>
      <h4><span onClick={()=> navigate('/')}pan>Главная</span></h4>
        <Filter/>
        <div className="recomendet">
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        <ProductCheaperCart />
        </div>
    </div>
  )
}

export default ProductFilter
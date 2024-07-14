import React from 'react'
import { Button, ProductMiniCart } from '../../ui'

const Saerch = () => {
  return (
    <div className='Saerch'>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <ProductMiniCart/>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button value={"Показать еще"} color={"white"} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: 10,
            height: "max-content",
            alignItems: "center",
          }}
        >
          <i style={{ color: "gray" }} className="fa-solid fa-chevron-left"></i>
          <Button value={"1"} color={"path active"} />
          <Button value={"2"} color={"path"} />
          <Button value={"3"} color={"path"} />
          <Button value={"4"} color={"path"} />
          <p style={{ fontSize: 20, color: "gray" }}>...</p>
          <Button value={"28"} color={"path"} />
          <Button value={"29"} color={"path"} />
          <i style={{ color: "gray" }} className="fa-solid fa-chevron-right"></i>
        </div>
    </div>
  )
}

export default Saerch
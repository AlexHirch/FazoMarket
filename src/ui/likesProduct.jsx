import React from 'react'
import { Iphone } from '../resource'

const LikesProduct = () => {
  return (
    <div className="LikesProduct">
        <div className="btn-xmark"><i className="fa-solid fa-xmark"></i></div>
      <div className="img">
        <img src={Iphone} alt="" />
      </div>
      <p>
        952 500 сум/мес <br />
        <span>10 520 000 сум</span>
      </p>
      <h3>Iphone 13 pro 256 Gb</h3>
      <div className="btn-group">
        <button>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button>
          <i className="fa-solid fa-scale-balanced"></i>
        </button>
      </div>
    </div>
  )
}

export default LikesProduct
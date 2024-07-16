import React, { useEffect } from 'react'
import LikesProduct from '../../ui/likesProduct'
import Aos from "aos";
import "aos/dist/aos.css";

const Likes = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-duration="300"
      data-aos-easing="ease-in-sine" className='Likes'>
        <LikesProduct/>
        <LikesProduct/>
        <LikesProduct/>
        <LikesProduct/>
        <LikesProduct/>
        <LikesProduct/>
    </div>
  )
}

export default Likes
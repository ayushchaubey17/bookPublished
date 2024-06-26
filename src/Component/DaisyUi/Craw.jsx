import React from 'react';
import a1 from "../../../public/a1.jpg"
import a2 from "../../../public/a2.jpg"
import a3 from "../../../public/a3.jpg"
import a4 from "../../../public/a4.jpg"


export default function Craw() {
  return (
    <div className=' '>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative  w-full">
    <img src={a1} className="w-full h-96 sm:min-h-screen" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={a2} className="w-full h-96 sm:min-h-screen" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={a3} className="w-full h-96  sm:min-h-screen" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={a4} className="w-full h-96 sm:min-h-screen" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}


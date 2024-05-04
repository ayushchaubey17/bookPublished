import React from 'react'

export default function Service() {
  return (
    <div className='space-y-4'>
        <h1 className="font-bold text-2xl text-center">Our Services</h1>
      <img className='mx-auto w-11/12 rounded-md shadow-lg shadow-zinc-400 border-4 border-gray-300 ' src="../../public/a1.jpg" alt="" />
      <img className='mx-auto w-11/12 rounded-md shadow-lg shadow-zinc-400 border-4 border-gray-300 ' src="a2.jpg" alt="" />
      <img className='mx-auto w-11/12 rounded-md shadow-lg shadow-zinc-400 border-4 border-gray-300 ' src="a3.jpg" alt="" />
      <img className='mx-auto w-11/12 rounded-md shadow-lg shadow-zinc-400 border-4 border-gray-300 ' src="a4.jpg" alt="" />
      <img className='mx-auto w-11/12 rounded-md shadow-lg shadow-zinc-400 border-4 border-gray-300 ' src="a5.jpg" alt="" />
      <img className='mx-auto w-11/12 rounded-md shadow-lg shadow-zinc-400 border-4 border-gray-300 ' src="a6.jpg" alt="" />

      <div className="carousel rounded-box  ">
  <div className="carousel-item">
    <img src="a1.jpg" alt="Burger" className='w-96 h-96' />
  </div> 
 
  <div className="carousel-item">
    <img src="a2.jpg" alt="Burger" className='w-80 h-96' />
  </div> 
  <div className="carousel-item">
    <img src="a3.jpg" alt="Burger" className='w-80 h-96' />
  </div> 
  <div className="carousel-item">
    <img src="a4.jpg" alt="Burger" className='w-80 h-96' />
  </div> 
  <div className="carousel-item">
    <img src="a5.jpg" alt="Burger" className='w-80 h-96' />
  </div> 
  <div className="carousel-item">
    <img src="a6.jpg" alt="Burger" className='w-80 h-96' />
  </div>
</div>
    </div>
  )
}

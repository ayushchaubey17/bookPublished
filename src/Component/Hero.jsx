import React from 'react'
import { NavLink } from 'react-router-dom'
let img1 = 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D';

export default function Hero() {
  return (
    <div>
      <div className={`rounded-full hero h-96 sm:min-h-screen  bg-[url('https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D')]`}>
      <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content  text-center">
    <div className="max-w-md">
      <h1 className="text-5xl my-4 text-white font-bold">Publish-Now</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <button className="btn btn-primary"><NavLink to="/contact">Go For Publish</NavLink></button>
    </div>
  </div>
</div>
    </div>
  )
}

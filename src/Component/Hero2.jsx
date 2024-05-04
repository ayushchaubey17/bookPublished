import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hero2() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D" className=" rounded-lg shadow-lg shadow-blue-950" />
    <div>
      <h1 className="text-3xl font-bold">View our published books</h1>
      <p className="py-6">We have published many books and a good response from our users.</p>
      <button className="btn btn-secondary"><NavLink to="/service">Our services</NavLink></button>
    </div>
  </div>
</div>
    </div>
  )
}

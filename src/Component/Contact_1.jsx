import React from 'react'
import Contact_2 from './Contact_2'
import Contact_3 from './Contact_3'

export default function Contact_1() {

  return (

    <>
   
      <div className="">
        <div className="">
        <div className="hero h-96 sm:min-h-screen  rounded-full" style={{backgroundImage: 'url( https://plus.unsplash.com/premium_photo-1661549545880-cdf61fd7bd9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGltYWdlfGVufDB8fDB8fHww)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Contact US</h1>
      <p className="mb-5"></p>
      {/* <button className="btn btn-primary">lets Start</button> */}
    </div>
  </div>
</div>
        </div>

      </div>
      <div className="sm:flex px-4 sm:px-10 mb-10 ">

        <Contact_2 />
        <Contact_3 />
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.2762737789585!2d79.80331717371418!3d11.955364036345777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53613fe9fded47%3A0xd48d53e58ddfca4f!2s29%2C%209th%20Cross%20St%2C%20Kurinji%20Nagar%2C%20Lawspet%2C%20Puducherry%2C%20605008!5e0!3m2!1sen!2sin!4v1712734616378!5m2!1sen!2sin" className='w-10/12 sm:w-1/2 h-64 rounded-lg mx-auto my-4'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </>
  )
}

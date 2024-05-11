import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom';

export default function Contact_3() {
  const wave = () => toast('Thanks we will reach to you soon');
  const nav = useNavigate();

  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e06bc2b8-db5a-486b-be29-f191205b3625");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      wave();
      setTimeout(() => {
        nav('/');
      }, 2000);
     
    }
  };

  return (
    <>
      <div className="border border-gray-200 rounded-md sm:px-16  mt-6 p-3 shadow-xl shadow-gray-300 ">
<ToastContainer/>
        {/* detail */}
        <div className="">
          <h1 className="py-8 sm:py-6 sm:text-2xl font-semibold">Fill The Details Below</h1>
        </div>


        {/* input tags */}
        <form className="flex-col space-y-4  " onSubmit={onSubmit}>
           <input type="text" name='name' required className="border w-full border-gray-500 rounded-full py-1 px-4 space-x-5" placeholder="Full Name" />
          <input type="email" name='email' required className="border w-full border-gray-500 rounded-full py-1 px-4 space-x-5" placeholder="Email" />
          
         <input type="number" name='number' required className="border w-full border-gray-500 rounded-full py-1 px-4 space-x-5" placeholder="Mobile" />
         
          <textarea name="message" id="" cols="" rows="5" required placeholder="Your Message" className='border w-full border-gray-500 rounded-xl space-x-5 px-4 py-2'></textarea>
          <div className="flex justify-center"><button className=" w-1/2 sm:w-1/4   font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-full px-3 py-1">Submit</button></div>
        </form>
      </div>

    </>
  )
}

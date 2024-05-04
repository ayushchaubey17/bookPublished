import React from 'react'
import { NavLink } from 'react-router-dom'
import Drower from './Drower'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
export default function Header() {

let a = "text-blue-400 underline font-bold"
let b = "text-red-700 font-semibold"


  return (
    <div className='bg-base-300'>
    
    <div className="flex items-center justify-between py-0   px-2 mb-4">
    <div className="sm:hidden"><Drower/></div>
    <div className="sm:hidden mr-4 font-bold text-lg">  
         <div className="avatar mt-2">
  <div className="w-10 h-10 rounded-full avtar">
    <img src="data:image/png;base64,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" />
  </div>
  </div></div>
    </div>
      <div className=" hidden sm:flex  sm:justify-center sm:space-x-40  sm:p-2">
        {/* <div className=""><LocalLibraryIcon/> </div> */}

     
     
     
     
     
     
     
     
     
        <div className="flex items-center justify-between space-x-24">
 
        <div className="avatar ">
  <div className="w-16 h-16 rounded-full avtar">
    <img src="data:image/png;base64,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" />
  </div>
  </div>

  <div className="hidden sm:block text-xl items-center space-x-24  justify-center ">
  
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/'>Home</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/service' >Service</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/auther' >AuthercheckList</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/blog'>Blog</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to='/contact' >Contact</NavLink>
            <NavLink className={({isActive})=> `${isActive?a:b}` } to ='/fq'>FAQ</NavLink>
          </div>
        </div>

        {/* sm */}
          
          
      
      </div>

    </div>
  )
}

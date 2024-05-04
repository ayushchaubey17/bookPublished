import React from 'react'
import { NavLink } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer_2() {

  let fun1
  return (
  <>
  {/* <div className="  px-24 py-2 sm:flex sm:justify-evenly sm:text-xl font-semibold text-gray-800">
        <h1 className="sm:hover:black">Home</h1>
        <h1 className="sm:hover:black">Publish Now</h1>
        <h1 className="sm:hover:black">Refund & Cancellation Policy</h1>
        <h1 className="sm:hover:black">Terms & Conditions</h1>
        <h1 className="sm:hover:black">Privacy Policy</h1>
        <h1 className="sm:hover:black">Contact Us</h1>
  </div> */}
  <div>
  <footer className="footer p-10 bg-base-300 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <ScrollIntoView selector='#footer'>  <h1><NavLink className= {({isActive}) => isActive?"text-blue-500 font-bold":""} onClick={fun1} to="/">Home</NavLink></h1>
  </ScrollIntoView>
  <ScrollIntoView selector='#footer'>  <h1><NavLink className= {({isActive}) => isActive?"text-blue-500 font-bold":""} onClick={fun1} to="/service">About us</NavLink></h1>
  </ScrollIntoView> 
  <ScrollIntoView  selector='#footer'><NavLink className= {({isActive}) => isActive?"text-blue-500 font-bold":""} onClick={fun1} to="/contact">Contact us</NavLink></ScrollIntoView>
  <ScrollIntoView  selector='#footer'><NavLink className= {({isActive}) => isActive?"text-blue-500 font-bold":""} onClick={fun1} to="/blog">Blog</NavLink></ScrollIntoView>
  <ScrollIntoView  selector='#footer'><NavLink className= {({isActive}) => isActive?"text-blue-500 font-bold":""} onClick={fun1} to="/auther">Author</NavLink></ScrollIntoView>
   
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
     <a  target='_blank' href="" className=""><FacebookIcon/></a>
     <a  target='_blank' href="https://api.whatsapp.com/send?phone=9087433080" className=""><WhatsAppIcon/></a>
      <a target='_blank'  href="mailto:wedoyourwork0@gmail.com" className=""><EmailIcon/></a>
     <a  target='_blank' href="tel:9087433080" className=""><CallIcon/></a>
     <a  target='_blank' href="https://github.com/muskanbharti08/" className=""><GitHubIcon/></a>
       </div>
  </nav>
</footer>

</div>
  </>
  )
}

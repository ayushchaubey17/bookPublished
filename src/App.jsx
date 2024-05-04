
import Header from './Component/Header'
import { Route,Routes } from 'react-router-dom'
import Service from './Component/Service'
import AutherCheckList from './Component/AutherCheckList'
import Contact_1 from './Component/Contact_1'
import Blog from './Component/Blog'
import Home_1 from './Component/Home_1'
import Faq_1 from './Component/Faq_1'
import Footer from './Component/Footer'
import Craw from './Component/DaisyUi/Craw'
import Rating from './Component/DaisyUi/Rating'
import ScrollIntoView from 'react-scroll-into-view'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';

function App() {
  return (
 <>
 <div id="footer"></div>
 <Header/>
 

<Routes>
  <Route path = '/' element = {<Home_1/>} />
  <Route path = '/contact' element={<Contact_1/>}/>
  <Route path = '/service' element={<Service/>}/>
  <Route path = '/auther' element={<AutherCheckList/>}/>
  <Route path = '/blog' element={<Blog/>}/>
  <Route path ='/fq'  element = {<Faq_1/>}/>
  
</Routes>

<div className="fixed w-fit bottom-4 left-4 border-2 rounded-full bg-blue-400 p-2 text-white">
  
<ScrollIntoView selector="#footer">
  <button className="">
  <ArrowUpwardIcon/>
  </button>
</ScrollIntoView>
</div>


<div className="fixed bottom-4 right-4 border-2 rounded-full bg-green-600 p-2 text-white">
<a href='https://api.whatsapp.com/send?phone=9087433080' className="">
  <WhatsAppIcon/>
  </a>
 
  </div>


  <div className="fixed bottom-16 my-2 right-4 border-2 rounded-full bg-blue-600 p-2 text-white">
<a href='mailto:wedoyourwork0@gmail.com' className="">
<MailIcon/>
  </a>
 
  </div>

<Footer/>



{/* <!-- somewhere down on our page we have our target element --> */}

{/* <div className="text-center"><Rating/></div> */}
 </>
  )
}

export default App

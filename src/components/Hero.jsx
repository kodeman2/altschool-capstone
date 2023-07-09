
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Input from './Input.jsx'
import Redirect from './Redirect.jsx'

function Hero() {

  return (
    <div className='flex flex-col '>
      
     <Router>
       <Routes>
         <Route path='/' element={<Input />} />
         <Route path='/:slug' element={<Redirect/>} />
        
       </Routes>
     </Router>
    
    </div>
  )
}

export default Hero
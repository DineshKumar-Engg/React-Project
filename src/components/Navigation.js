import React from 'react'
import image from '../image/image.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
   <div className='Container'>
   
    <div className='navbar'> 
      <nav className='navbar_nav'>
        <div className='logo'>
         <Link to=" "><img src={image} alt="logo"></img></Link>
          </div> 
        <ul className='nav_ul'>
          <li className='nav_li'>
            <Link to='/' className='active' >Home</Link>
          </li>
        </ul>
      </nav>
    </div>
   </div>
  )
}
export default Navigation
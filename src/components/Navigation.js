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
            <Link to='/Home' className='active' >Home</Link>
          </li>
          <li className='nav_li'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav_li'>
            <Link to='/TVShow'>Tv Show</Link>
          </li>
          <li className='nav_li'>
            <Link to='/WebSeries'>Web Series</Link>
          </li>
          <li className='nav_li'>
            <Link to='/LogIn'>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
   </div>
  )
}
export default Navigation
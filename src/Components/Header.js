import React from 'react';
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth';
//import './Header.css'

const Header = () => {
  return(
    <div className='headerWrapper'>
      <div className='headerTitle'>
        <Link to='/'>GameStream</Link>
      </div>
      <div className='navLinks'>
        <Link to='/'>All Streams</Link>
        <GoogleAuth/>
      </div>
    </div>
  )
}

export default Header;
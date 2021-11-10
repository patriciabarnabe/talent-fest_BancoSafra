import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {

  return (
    <nav className='navbar-menu'>
      <Link className='link' to='/home' ><i className='fas fa-home' /></Link>
      <Link className='link' to='/article' ><i className='fas fa-book-open' /></Link>

      <Link className='link' to='/saves'><i className="far fa-star" /></Link>
      <Link className='link' to='/profile'><i className='far fa-user' /></Link>
    </nav>
  );
}

export default Navbar;
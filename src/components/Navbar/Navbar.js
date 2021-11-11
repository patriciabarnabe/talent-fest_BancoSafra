import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import './navbar.css';

const Navbar = () => {

  const SignOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log('deu bão')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <nav className='navbar-menu'>
      <Link className='link' to='/home' ><i className='fas fa-home' /></Link>
      <Link className='link' to='/contents' ><i className='fas fa-book-open' /></Link>

      <Link className='link' to='/saves'><i className="far fa-star" /></Link>
      <Link className='link' to='/profile'><i className='far fa-user' /></Link>
      <Link className='link' onClick={SignOut} to='/home'><i class="fas fa-sign-out-alt"></i></Link>
    </nav>
  );
}

export default Navbar;
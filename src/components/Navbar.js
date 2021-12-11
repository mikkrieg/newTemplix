import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './../AppContext';
import '../styles/css/navbar.css';
import img from '../img/logo.png';


function Navbar() {
  const [click, setClick] = useState(false);
  const { onHome, onLayout } = useContext(AppContext);

  const handleClick = () => {
    setClick(!click);
    if(click === false) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  const returnScroll = () => {
    document.body.classList.remove('no-scroll');
  }
  
  const closeMobileMenu = () => setClick(false);

  return (
    <>  
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img src={img} alt='templix' className='logo-icon'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={function(e){closeMobileMenu(); returnScroll();}}>
                <p className={onHome ? 'color-links grow' : 'color-links'}>Home</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/layouts' className='nav-links' onClick={function(e){closeMobileMenu(); returnScroll();}}>
                <p className={onLayout ? 'color-links grow' : 'color-links'}>Layouts</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;


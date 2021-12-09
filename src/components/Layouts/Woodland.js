import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles/Layouts/woodland.scss';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router'
// import InfoModal from '../InfoModal.js';
import { AppContext } from '../../AppContext';

const Woodland = () => {
  const [ menuClicked, setMenuClicked ] = useState(false); 
  const { setOnProject, onProject } = useContext(AppContext);
  const history = useHistory();

  if(onProject === true) {
    document.body.classList.remove('background');
    document.body.classList.remove('background--color-map');
  }
  
  const handleClick = () => {
    setOnProject(false);
    document.body.classList.add('background');
    document.body.classList.add('background--color-map');
    history.push('/layouts');
  }

  const menuClick = () => {
    let h1 = document.getElementsByClassName('layout-heading');
    if(menuClicked === true) {
      h1.classList.add('hide');
    } else {
      h1.classList.remove('hide');
    }
    setMenuClicked(!menuClicked);
  }

  return(
    <div className='layout-background'>
      <Navbar collapseOnSelect expand='md' className='layout-1-nav' fixed='top' variant='dark'>
        <Navbar.Brand>
          <Button variant='light' className='button-styling' onClick={handleClick}>Go Back</Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='layout-toggle'>
          {menuClicked ? 
            <i className='fas fa-times layout-icon' onClick={() => menuClick()}></i> 
            : 
            <i className='fas fa-bars layout-icon' onClick={() => menuClick()}></i>
          }
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav' className='layout-collapse'>
          <Nav className='navbar-style'>
            <Nav.Link className='layout-navs'>Link 1</Nav.Link>
            <Nav.Link className='layout-navs'>Link 2</Nav.Link>
            <Nav.Link className='layout-navs'>Link 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='layout-body'>
        <h1 className='layout-heading'>Hello</h1>
        <footer className='footer-position'>&copy;2021</footer>
      </div>
  
      <Button className="modal-activate" onClick={handleClick}>?</Button>
      {/* <InfoModal 
      show={open} 
      onHide={handleClick} 
      title="Forest themed layout"
      spec1="React-Bootstrap"
      spec2="CSS-Modules"
      spec3="15mb"
      spec4="React"
      spec5="JavaScript"
      spec6="1"
      spec7="1"
      spec8="2"/> */}
    </div>
  )
};

export default Woodland;

<i class="fas fa-bars"></i>
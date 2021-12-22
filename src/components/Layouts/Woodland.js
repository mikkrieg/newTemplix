import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles/css/layouts/woodland.css';
import Button from 'react-bootstrap/Button';
import InfoModal from './../InfoModal';
import { useHistory } from 'react-router'
import { AppContext } from '../../AppContext';

const Woodland = () => {
  const [ menuClicked, setMenuClicked ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const { setOnProject, onProject } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    setOnProject(true);
  }, [])


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

    if(menuClicked === false) {
      h1[0].classList.add('hide');
      h1[0].classList.remove('show-heading');
    } else {
      h1[0].classList.remove('hide');
      h1[0].classList.add('show-heading');
    }

    if(menuClicked === false) {
      setMenuClicked(true);
    } else {
      setMenuClicked(false);
    }
  }

  const handleModalClick = () => {
    if(open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  const hideModal = () => {
    if(window.innerWidth < 960) {
      setOpen(false);
    }
  }
  window.onresize = hideModal;

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
        <div className='heading-div'>
          <h1 className='layout-heading'>Hello</h1>
        </div>
        <footer className='footer-position'>&copy;2021</footer>
      </div>
  
      <Button className="modal-activate" variant='light' onClick={handleModalClick}>?</Button>
      <InfoModal 
        show={open} 
        onHide={handleModalClick} 
        title="Forest themed layout"
        styling={["React-Bootstrap", "CSS-Modules"]}
        download="15mb"
        technologies={["React", "JavaScript"]}
        css="1"
        content="1"
        image="2"
        installs={['NPM or another package manager', 'React', 'create-react-app', 'React-Bootstrap v2.0.2^']}
      />
    </div>
  )
};

export default Woodland;

<i class="fas fa-bars"></i>
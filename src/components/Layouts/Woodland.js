import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './../../styles/Layouts/woodland.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router'
// import InfoModal from '../InfoModal.js';
import { AppContext } from '../../AppContext';

const Woodland = () => {
  const { setOnProject } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    setOnProject(false);
    history.push('/layouts');
  }

  return(
    <div className='layout-background'>
      <Container className='layout-container'>
        <Navbar collapseOnSelect expand='md' className='layout-1-nav' fixed='top'>
          <Navbar.Brand>
        
            <Button className='button-styling'onClick={handleClick}>Go Back</Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' className='layout-toggle'/>
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
      </Container>
    </div>
  )
};

export default Woodland;

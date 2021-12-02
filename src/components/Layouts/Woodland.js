import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './../../styles/Layouts/woodland.css'
import Button from 'react-bootstrap/Button';

// These imports can be removed on download
import InfoModal from '../InfoModal.js';
import { AppContext } from '../../AppContext';

// props parameter can be removed on download 
const Woodland = (props) => {
  // These state slices can be removed on download
  const [open, setOpen] = useState(false);
  const { setOnProject } = useContext(AppContext);

  useEffect(() => {
    setOnProject(true);
  }, [])

  const handleClick = () => {
    if(open !== false) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  return(
    <div className={styles['layout-background']}>
    <Container className={styles['layout-container']}>
      <Navbar collapseOnSelect expand='md' className={styles['layout-1-nav']} fixed='top'>
        <Navbar.Brand>
          {/* This button can be deleted on download and replaced with a logo */}
          <Button className={styles['button-styling']}onClick={() => props.handleBackClick()}>Go Back</Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className={styles['layout-toggle']}/>
        <Navbar.Collapse id='responsive-navbar-nav' className={styles['layout-collapse']}>
          <Nav className={styles['navbar-style']}>
            <Nav.Link className={styles['layout-navs']}>Link 1</Nav.Link>
            <Nav.Link className={styles['layout-navs']}>Link 2</Nav.Link>
            <Nav.Link className={styles['layout-navs']}>Link 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <body className={styles['layout-body']}>
        <h1 className={styles['layout-heading']}>Hello</h1>
        <footer className={styles['footer-position']}>&copy;2021</footer>
      </body>
      {/* The button and modal below can be removed on download */}
      <Button className={styles["modal-activate"]} onClick={handleClick}>?</Button>
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

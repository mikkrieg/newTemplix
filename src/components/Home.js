import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../AppContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import '../styles/css/home.css';


const Home = () => {
  const { onHome, setOnHome, setOnLayout, onLayout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('./layouts');
  }

  const onLoad = () => {
    setOnHome(true);
    if(onLayout === true) {
      setOnLayout(false);
    }
  }

  useEffect(() => {
    onLoad();
  })

  if(onHome === true) {
    document.body.classList.add('no-scroll');
  }

  return (
    <Container className='home-container'>
      <Row className='home-head'>
        <Col xs={12} >
          <h1 className='fade-in'>Welcome</h1>
          <Button
            onClick={handleClick}
            id='fade-button'
            className='background--color-map mt-3 text-color'
            variant='outline-dark'
            size='lg'
          >
            Browse Layouts
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
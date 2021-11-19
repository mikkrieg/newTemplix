import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import '../styles/home.scss';


const Home = () => {
  const [ onHome, setOnHome ] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    history.push('./layouts');
  }

  const onLoad = () => {
    setOnHome(true);
  }

  useEffect(() => {
    onLoad();
  }, [])

  if(onHome === true) {
    document.body.classList.add('no-scroll');
  }

  return (
    <Container className='home-container'>
    <Row>
      <Col xs={12} md={4}>
        <h1 className='fade-in'>Welcome</h1>
      </Col>
    </Row>
    <Row>
      <Col>
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
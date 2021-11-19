import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import ProjectCard from './ProjectCard';
import '../styles/layouts.scss';
import logo from '../img/logo.png'
import layout1 from '../img/layout-1.png';


const Layouts = () => {
  const [ onLayout, setOnLayout ] = useState(false);

  const onLoad = () => {
    setOnLayout(true);
  }

  useEffect(() => {
    onLoad();
  }, [])

  if(onLayout === true) {
    document.body.classList.remove('no-scroll')
  }

  return(
    <Container className='layout-container'>
      <Row className='layout-info mt-5'>
        <p className='layout-p'>When viewing a layout, select the <strong>?</strong> in the bottom right corner for instructions and specifications</p>
        <p className='layout-p'>Downloads are currently only available on Desktop</p>
      </Row>
      <Row className='mt-3 card-row'>
        <Col lg={4}>
          <ProjectCard 
            image={layout1} 
            title='Woodland Layout' 
            content='This is a layout styled with react-boostrap and css modules that provides a woodland theme.'
            path='/woodland'
          />
        </Col>
        <Col lg={4}>
          <ProjectCard 
            image={logo} 
            title='Travel Layout' 
            content='This is a layout styled with Material-UI that provides a travel theme.'
            path='/travel'
          />
        </Col>
        <Col lg={4}>
          <ProjectCard 
            image={logo} 
            title='Sports Layout' 
            content='This is a layout styled with Bulma.io that provides a sports theme.'
            path='/sports'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Layouts;
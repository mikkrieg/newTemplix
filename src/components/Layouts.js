import React, { useContext, useEffect, useState } from 'react';
import {AppContext} from '../AppContext';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Aos from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import ProjectCard from './ProjectCard';
import '../styles/layouts.scss';
import logo from '../img/logo.png'
import layout1 from '../img/layout-1.png';

const names = [
  {
    name: 'Woodland',
    id: 'woodland',
    content: 'This is a layout styled with react-boostrap and css modules that provides a woodland theme.',
    title: 'Woodland Layout',
    image: {layout1},
    index: 1   
  },
  {
    name: 'Travel',
    id: 'travel',
    content: 'This is a layout styled with Material-UI that provides a travel theme.',
    title: 'Travel Layout',
    image: {logo},
    index: 2
  },
  {
    name: 'Sports',
    id: 'sports',
    content: 'This is a layout styled with Bulma.io that provides a sports theme.',
    title: 'Sports Layout',
    image: {logo},
    index: 3
  }
]

const Layouts = () => {
  const [ onLayout, setOnLayout ] = useState(false);
  const { setOnHome, setOnProject, onProject } = useContext(AppContext);
  const { url } = useRouteMatch();
  
  const onLoad = () => {
    setOnHome(false);
    setOnLayout(true);
  }

  const handleProjectClick = () => {
    setOnProject(true);
  }

  useEffect(() => {
    onLoad();
    Aos.init({ duration: 1500 });
  }, [])

  if(onLayout === true) {
    document.body.classList.remove('no-scroll')
  }

  return(
    <Container className='layout-container' data-aos='fade-up'>
      <Row className='layout-info mt-3'>
        <p className='layout-p'>
          When viewing a layout, select the <span className='mark'>?</span> in the bottom right corner for instructions and specifications
        </p>
      </Row>
      <Row className='card-row'>
        {names.map(({ id, image, title, content, index}) => (
          <Col lg={4} key={id}>
            <Link className='project-link' to={`${url}/${id}`} onClick={handleProjectClick}>
              <ProjectCard 
                image={image} 
                title={title}
                content={content}
                id={index}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Layouts;
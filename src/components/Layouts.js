import React, { useContext, useEffect } from 'react';
import {AppContext} from '../AppContext';
// import { useMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Aos from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import ProjectCard from './ProjectCard';
import '../styles/css/layouts.css';
import layout1 from './../img/layout-1.png';
import layout2 from './../img/layout-2.png';
import layout3 from './../img/layout-3.png'

const names = [
  {
    name: 'Woodland',
    id: 'woodland',
    content: 'This is a woodland layout that I built and styled with react-bootstrap and css modules.',
    title: 'Woodland Layout',
    image: {layout1},
    index: 1   
  },
  {
    name: 'Travel',
    id: 'travel',
    content: 'This is a travel layout that I built and styled with Material UI',
    title: 'Travel Layout',
    image: {layout2},
    index: 2
  },
  {
    name: 'Sports',
    id: 'sports',
    content: 'This is a sports layout that I built and styled with Bulma.io',
    title: 'Sports Layout',
    image: {layout3},
    index: 3
  }
]

const Layouts = () => {
  const { setOnHome, setOnProject, onLayout, setOnLayout } = useContext(AppContext);
  // const { url } = useMatch();
  // console.log(url);
  
  const onLoad = () => {
    setOnHome(false);
    setOnLayout(true);
  }

  useEffect(() => {
    setOnProject(false);
    onLoad();
    Aos.init({ duration: 1500 });
  })

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
          <Col sm={9} md={8} lg={4} key={id}>
            <Link className='project-link' to={`${id}`}>
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
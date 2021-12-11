import React from 'react';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import './../styles/css/projectCard.css'

const ProjectCard = (props) => {
  let image;
  if(props.id === 1) {
    image = props.image.layout1;
  } else if(props.id === 2) {
    image = props.image.layout2;
  } else {
    image = props.image.logo;
  }
  return (
    <Card className='card-styles mt-3' id='card-1'>
      <Card.Img variant='top' src={image} className='card-image'/>
      <Card.Body>
        <Card.Title className='card-title'>{props.title}</Card.Title>
        <Card.Text className='card-text'>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  )

}

export default ProjectCard;
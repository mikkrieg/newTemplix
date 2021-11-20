import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';

const ProjectCard = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(props.path)
  }

  return (
    <Card onClick={handleClick} className='card-styles mt-3' id='card-1'>
      <Card.Img variant='top' src={props.image}/>
      <Card.Body>
        <Card.Title className="card-titles">{props.title}</Card.Title>
        <Card.Text className='card-text'>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  )

}

export default ProjectCard;
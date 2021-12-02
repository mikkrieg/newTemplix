import React from 'react';
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';
import styles from './../styles/projectCard.scss'

const ProjectCard = (props) => {
  let image;
  if(props.id === 1) {
    image = props.image.layout1
  } else {
    image = props.image.logo
  }
  return (
    <Card className={`${styles.cardStyles} mt-3`} id='card-1'>
      <Card.Img variant='top' src={image}/>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{props.title}</Card.Title>
        <Card.Text className={styles.cardText}>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  )

}

export default ProjectCard;
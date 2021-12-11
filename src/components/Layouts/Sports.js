import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router'
import { AppContext } from '../../AppContext';
import './../../styles/css/layouts/sports.css';

const Sports = () => {
  const { setOnProject } = useContext(AppContext);
  const history = useHistory();
  const handleClick = () => {
    setOnProject(false);
    document.body.classList.add('background');
    document.body.classList.add('background--color-map');
    history.push('/layouts');
  }
  return (
    <>
      <div className='travel-background'>
        <h1>Sports</h1>
        <Button onClick={handleClick}>Go Back</Button>
      </div>
    </>
  )
}

export default Sports;
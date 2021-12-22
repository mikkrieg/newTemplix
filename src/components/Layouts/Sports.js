import React, { useContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router'
import { AppContext } from '../../AppContext';
import InfoModal from './../InfoModal';
import './../../styles/css/layouts/sports.css';

const Sports = () => {
  const { setOnProject } = useContext(AppContext);
  const [ open, setOpen ] = useState(false);
  const [ click, setClick ] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    setOnProject(true);
  }, [])

  const handleClick = () => {
    setOnProject(false);
    document.body.classList.add('background');
    document.body.classList.add('background--color-map');
    history.push('/layouts');
  }

  const activate = () => {
    setClick(!click)
  }

  const handleModalClick = () => {
    if(open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className='sports-background'>
      <nav className="navbar sports-nav" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <button className='button is-primary is-light is-large ml-4 back-btn-sports' onClick={handleClick}>Go Back</button>
        </div>
        <div className='burger-div'>
          <button 
            onClick={activate} 
            className={click ? 'navbar-burger mr-5 is-active' : 'navbar-burger mr-5'} 
            aria-label="menu" aria-expanded="false" 
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div 
          id="navbarBasicExample" 
          className={click ? 'navbar-menu desktop-menu is-active' : 'navbar-menu desktop-menu'}
        >
          <div className="navbar-end mr-5">
            <a className="navbar-item mr-3 mt-1">
              Link 1
            </a>
            <a className="navbar-item mr-3 mt-1">
              Link 2
            </a>
            <a className="navbar-item mr-3 mt-1">
              Link 3
            </a>
          </div>
        </div>
      </nav>
      <div className='content'>
        <h1 className='is-size-2-mobile is-size-2-tablet is-size-1-desktop title is-uppercase has-text-centered'>Find your community</h1>
        <button className='button is-primary is-large'>Sign Up!</button>
      </div>
      <button className="sports-modal button is-light"  onClick={handleModalClick}>?</button>
      <InfoModal 
        show={open} 
        onHide={handleModalClick} 
        title="Sports Themed Layout"
        styling={['Bulma.io']}
        download="15mb"
        technologies={["React", "JavaScript"]}
        css="1"
        content="1"
        image="1"
        installs={[['NPM or another package manager', 'React', 'create-react-app', 'Bulma.io v0.9.3^']]}
      />
      <footer className='sports-footer'>&copy;2021</footer>
    </div>
  )
}

export default Sports;
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router'
import { AppContext } from '../../AppContext';
import './../../styles/css/layouts/sports.css';

const Sports = () => {
  const { setOnProject } = useContext(AppContext);
  const [ click, setClick ] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setOnProject(false);
    document.body.classList.add('background');
    document.body.classList.add('background--color-map');
    history.push('/layouts');
  }

  const activate = () => {
    setClick(!click)
    let burger = document.getElementsByClassName('navbar-burger');
    let menu = document.getElementsByClassName('navbar-menu');
    if(click === true) {
      burger[0].classList.add('is-active');
      menu[0].classList.add('is-active');
    } else {
      burger[0].classList.remove('is-active');
      menu[0].classList.remove('is-active');
    }
  }
  return (
    <div className='sports-background'>
      <nav className="navbar sports-nav" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <button className='button is-primary is-light is-large ml-4 back-btn-sports' onClick={handleClick}>Go Back</button>
        </div>
        <div classname='burger-div'>
        <a role="button" className="navbar-burger mr-5" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={activate}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
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
        <h1 className='is-size-3-mobile is-size-2-tablet is-size-1-desktop title is-uppercase has-text-centered'>Find your community</h1>
        <button className='button is-primary is-large'>Sign Up!</button>
      </div>
      <footer className='sports-footer'>&copy;2021</footer>
    </div>
  )
}

export default Sports;
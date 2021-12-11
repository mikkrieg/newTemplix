import React, { useContext } from 'react';
import './../styles/css/footer.css';
import { AppContext } from '../AppContext';

const Footer = () => {
  const { onHome } = useContext(AppContext);
  return (
    <footer className={onHome ? 'home-position' : 'layout-position'}>&copy; 2021 Michael Kriegel</footer>
  )
}

export default Footer;
import React, { useContext } from 'react';
import './../styles/footer.scss';
import { AppContext } from '../AppContext';

const Footer = () => {
  const { onHome } = useContext(AppContext);
  return (
    <footer className={onHome ? 'home-position' : ''}>&copy; 2021 Michael Kriegel</footer>
  )
}

export default Footer;
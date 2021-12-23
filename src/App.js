import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Layouts from './components/Layouts';
import { AppContext } from './AppContext';
import Travel from './components/layouts/Travel';
import Sports from './components/layouts/Sports';
import Woodland from './components/layouts/Woodland';
import './styles/css/background.css';
// import './sass/main.scss';
import {Routes, Route} from 'react-router-dom';

function App() {
  const { onProject } = useContext(AppContext);
  if(onProject === true) {
    document.body.classList.remove('background--color-map');
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.add('background--color-map');
  }
  return (
    <>
      {onProject ? '' : <Navbar/>}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='layouts/' element={<Layouts/>} />
          <Route path='/layouts/woodland' component={<Woodland/>}/>
          <Route path='/layouts/sports' element={<Sports/>}/>
          <Route path='/layouts/travel' element={<Travel/>}/> 
        </Routes>
      {onProject ? '' : <Footer/>}
    </>
  );
}

export default App;

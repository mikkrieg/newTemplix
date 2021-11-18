import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Layouts from './components/Layouts';
// import { AppProvider } from './AppContext.js';
// import './sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <AppProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/layouts' element={<Layouts/>} />
        </Routes>
        <Footer/>
      </Router>
    // {/* </AppProvider> */}
  );
}

export default App;

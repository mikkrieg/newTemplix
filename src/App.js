import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Layouts from './components/Layouts';
import Woodland from './components/Layouts/Woodland';
import Travel from './components/Layouts/Travel';
import Sports from './components/Layouts/Sports';
import './styles/background.scss';
// import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/layouts' component={Layouts} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

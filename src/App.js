import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Layouts from './components/Layouts';
import { AppContext } from './AppContext';
import Travel from './components/layouts/Travel.js';
import Sports from './components/layouts/Sports.js';
import Woodland from './components/layouts/Woodland.js';
import './styles/css/background.css';
// import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const { onProject } = useContext(AppContext);
  if(onProject === true) {
    document.body.classList.remove('background--color-map');
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.add('background--color-map');
  }
  return (
    <Router>
      {onProject ? '' : <Navbar/>}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/layouts' component={Layouts} />
        <Route path='/layouts/woodland' component={Woodland}/>
        <Route path='/layouts/sports' component={Sports}/>
        <Route path='/layouts/travel' component={Travel}/> 
      </Switch>
      {onProject ? '' : <Footer/>}
    </Router>
  );
}

export default App;

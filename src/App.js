import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Layouts from './components/Layouts';
import { AppContext } from './AppContext';
import './styles/background.scss';
// import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { onProject } = useContext(AppContext);
  if(onProject === false) {
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
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/layouts' component={Layouts} />
        </Switch>
      </Router>
    );
  }
  
}

export default App;

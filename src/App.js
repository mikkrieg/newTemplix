import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Layouts from './components/Layouts';
import Woodland from './components/Layouts/Woodland';
import Travel from './components/Layouts/Travel';
import Sports from './components/Layouts/Sports';
import { AppProvider } from './AppContext';
import './styles/background.scss';
// import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/layouts' component={Layouts} />
          <Route exact path='/woodland' component={Woodland} />
          <Route exact path='/travel' component={Travel} />
          <Route exact path='/sports' component={Sports} />
        </Switch>
        <Footer/>
      </Router>
    </AppProvider>
  );
}

export default App;

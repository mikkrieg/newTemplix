import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import { AppProvider } from './AppContext.js';
import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // <AppProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/layouts' component={Layouts} />
        </Switch>
        <Footer/>
      </Router>
    // {/* </AppProvider> */}
  );
}

export default App;

export default App;

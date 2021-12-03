import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Layouts from './components/Layouts';
import { AppContext } from './AppContext';
// import Travel from './components/Layouts/Travel ';
// import Sports from './components/Layouts/Sports';
import Woodland from './components/Layouts/Woodland';
import './styles/background.scss';
// import './sass/main.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const { onProject } = useContext(AppContext);
  return (
    <Router>
      <Navbar/>
      <Switch>
        {onProject ? 
          <>
            <Route path='/layouts/woodland' component={Woodland}/>
            {/* <Route path='/layouts/sports' component={Sports}/>
            <Route path='/layouts/travel' component={Travel}/>  */}
          </>
        :
          <>
            <Route exact path='/' component={Home} />
            <Route exact path='/layouts' component={Layouts} />
          </>
        }
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

import React from 'react';
import { hot } from 'react-hot-loader';  
import Home from "./Home"
import Lobby from "./Lobby"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../styles/main.css'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="h-screen w-full bg-indigo-200 font-sans">
          
        <Route exact path="/" component={Home}/>
        <Route path="/lobby" component={Lobby}/>   
      </div>
      </Router>
      

    );
  }
}

export default hot(module)(App);

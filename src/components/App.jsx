import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
import Lobby from './Lobby'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/main.css'
class App extends React.Component {
  render() {
    return (
      <div>
      <Lobby/>
  </div>

    );
  }
}

export default hot(module)(App);

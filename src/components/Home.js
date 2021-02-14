import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/main.css'
class Home extends React.Component {


    
  render() {
    return (
      <div >
      <div class="h-screen w-full flex items-center justify-center  font-sans">
  <div className="p-4  shadow-lg flex items-center justify-center w-1/4 h-1/2 ">
  <div className="flex items-center flex-col">
  <h2 className="text-white-100 py-8 underline">Kings Game</h2>
  <button className="bg-blue-500 hover:bg-blue-700 text-white  m-3 flex flex-col font-bold py-2 px-4 rounded">Create</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white  m-3 flex flex-col font-bold py-2 px-4 rounded">Join in</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white  m-3 flex flex-col font-bold py-2 px-4 rounded">Lobby</button>
  </div>
    </div>
</div>
  </div>
    );
  }
}

export default hot(module)(Home);

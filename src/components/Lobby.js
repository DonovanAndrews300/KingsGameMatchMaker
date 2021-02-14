import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/main.css'
class Lobby extends React.Component { 
  render() {
    return (
      <div >
      <div class="h-screen w-full flex items-center justify-center  font-sans">
  <div className=" flexp-4  shadow-lg w-2/4 h-4/5 ">
  <div className="flex justify-around flex-row ">
  <button className="bg-blue-500 hover:bg-blue-700 h-10 text-white justify-around m-3 font-bold py-2 px-4 rounded">Back</button>
  <h2 className="text-white-100 py-8 h-10 underline">Lobby</h2>
  <button className="bg-blue-500 hover:bg-blue-700 h-10 text-white  m-3  font-bold py-2 px-4 rounded">Host Game</button>
  </div>
  <div className="flex justify-center py-5">
<table class="shadow-lg">
  <tr className='flex justify-center items-center'>
  <th class="bg-blue-100 border-r-2 border-black text-left px-8 py-4">Room Name</th>
    <th class="bg-blue-100 border-r-2 border-black text-left px-8 py-4">Player 1</th>
    <th class="bg-blue-100  border-black text-left px-8 py-4">Player 2</th>
  </tr>
</table>
  </div>
  
    </div>
</div>
  </div>
    );
  }
}

export default hot(module)(Lobby);

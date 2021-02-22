import React from 'react';
import { hot } from 'react-hot-loader';

import {PrimaryButton} from '../components/Buttons';
import {PrimaryTextField} from '../components/TextFields'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Swords from './swords.png'
import '../styles/main.css'

class MatchSearch extends React.Component {
    
  render() {
    return (
      
  <div className=" absolute border bg-blue-50 shadow-lg w-2/6 h-2/5">
  <div className="p-10 flex justify-around items-center"><img src={Swords}/> <h1>Looking for Opponent...</h1></div>
  <div className="flex justify-end h-2 items-end"> 
<PrimaryButton text={"Loading..."}></PrimaryButton>
</div>
    </div>
    );
  }
}

export default hot(module)(MatchSearch);
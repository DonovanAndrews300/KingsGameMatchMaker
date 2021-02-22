import React from 'react';
import { hot } from 'react-hot-loader';

import {PrimaryButton} from '../components/Buttons';
import {PrimaryTextField} from '../components/TextFields'
import '../styles/main.css'

class PreMatch extends React.Component {
  render() {
    return (
      
  <div className=" absolute border bg-blue-50 shadow-lg w-2/6 h-2/5">
  <div className="flex flex-row">
    <div className="flex h-full absolute w-1/3 justify-center m-3 flex-col">
    Player1
    <PrimaryTextField/>
    Player2
  <PrimaryTextField/>
    </div>
  <div className="flex h-full absolute w-2/5 justify-center items-end flex-col">
  <input className="my-14" type="checkbox"/>
  <input type="checkbox"/>
  </div>
  </div>

  <div className="flex items-end h-full justify-end"> 
<PrimaryButton text={"Ready"}></PrimaryButton>
</div>
    </div>
    );
  }
}

export default hot(module)(PreMatch);
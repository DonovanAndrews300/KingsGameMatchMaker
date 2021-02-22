import React from 'react';
import { hot } from 'react-hot-loader';
import MatchSearch from '../components/MatchSearch'
import PreMatch from '../components/PreMatch'
import {Link} from "react-router-dom"
import {PrimaryButton}from '../components/Buttons'
import '../styles/main.css'
class Home extends React.Component {
  constructor(){
    super()
    this.openSearchModal = this.openSearchModal.bind(this)
    this.state = {
        searchingModalOn:false,
        preMatchModalOn:false
    }
}

openSearchModal(){
  this.setState({searchingModalOn:true}, () => {
    setTimeout(() =>  this.setState({searchingModalOn:false}),1500)
  })
  console.log(this.state.openSearchModal)
}

    
  render() {
    return (
  <div className="flex justify-center items-center h-full">
    {
      this.state.searchingModalOn && 
      <MatchSearch/>
    }
     {
      this.state.preMatchModalOn && 
      <PreMatch/>
    }
  <div className="shadow-lg flex flex-col justify-center items-center w-1/4 h-2/4">
  <h2 className="text-white-100 py-8 underline">Kings Game</h2>
  <PrimaryButton onClick={()=>this.openSearchModal()} text={"Create"}/>
  <PrimaryButton onClick={()=>this.openSearchModal()} text={"Join"}/>
  <Link to={"/lobby"}><PrimaryButton text={"Lobby"}/></Link>
  </div>
    </div>
    );
  }
}

export default hot(module)(Home);

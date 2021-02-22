import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
import MatchSearch from '../components/MatchSearch'
import { Link } from 'react-router-dom';
import '../styles/main.css'
class Lobby extends React.Component { 
  constructor(){
    super()
   this.state = {
        searchingModalOn:false,
        preMatchModalOn:false
    }
this.openSearchModal = this.openSearchModal.bind(this)
   
}


openSearchModal(){
  this.setState({searchingModalOn:true}, () => {
    setTimeout(() =>  this.setState({searchingModalOn:false}),1500)
  })
  console.log(this.state.openSearchModal)
}

  
  render() {
    return (
      <div >
      <div className="h-screen w-full flex items-center justify-center  font-sans">
         {
      this.state.searchingModalOn && 
      <MatchSearch/>
    }
     {
      this.state.preMatchModalOn && 
      <PreMatch/>
    }
  <div className=" flexp-4  bg-white shadow-lg w-2/4 h-4/5 ">
  <div className="flex justify-around flex-row ">
 <Link to={"/"}><button className="bg-blue-500 hover:bg-blue-700 h-10 text-white justify-around m-3 font-bold py-2 px-4 rounded">Back</button></Link>
  <h2 className="text-white-100 py-8 h-10 underline">Lobby</h2>
  <button onClick={() => this.openSearchModal()} className="bg-blue-500 hover:bg-blue-700 h-10 text-white  m-3  font-bold py-2 px-4 rounded">Host Game</button>
  </div>
  <div className="flex justify-center py-5">
<table className="shadow-lg">
  <tbody>
      <tr className='flex justify-center items-center'>
  <th className="bg-blue-100 border-r-2 border-black text-left px-8 py-4">Room Name</th>
    <th className="bg-blue-100 border-r-2 border-black text-left px-8 py-4">Player 1</th>
    <th className="bg-blue-100  border-black text-left px-8 py-4">Player 2</th>
  </tr>
  </tbody>

</table>
  </div>
    </div>
</div>
  </div>
    );
  }
}

export default hot(module)(Lobby);

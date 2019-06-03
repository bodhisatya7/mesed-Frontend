import React, { Component } from 'react'
import './artisthome.css';
//import Confetti from 'react-confetti';


class ArtistHome extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick(){
   this.props.history.push('/register')
  }
    render () {
        return (
          <div className="bg" align="center">
                       {/* <Confetti
                        /> */}
           <div className="artisthomebody">
                <h1 className="artisthometext">Want people to listen to your music?</h1>
                <button className="newbutton1" onClick={this.handleClick}><span>Register Today</span></button>
         </div>
          </div>
        )}
}

export default ArtistHome;
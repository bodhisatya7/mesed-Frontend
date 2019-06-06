import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './artisthome.css';


class ArtistHome extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this); 
    this.handleItem = this.handleItem.bind(this); 
  }
  handleClick(){
   this.props.history.push('/register')
  }
  handleItem(){
    this.props.history.push('/login')
   }
    render () {
        return (
          <div className="bg" align="center">
                <div className="artisthomebody">
                <h1 className="artisthometext">Want people to listen to your music?</h1>
                <div className="btn-grp">
                <Button className="newbutton1" onClick={this.handleClick}><span>Register Today</span></Button>
                <Button className="newbutton1" onClick={this.handleItem}><span>Login</span></Button>
                </div>
         </div>
          </div>
        )}
}

export default ArtistHome;
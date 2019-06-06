import React from 'react';
import Header from '../../Header/Header'
import { Button } from 'semantic-ui-react'
import './Artist.css'
import ReactAudioPlayer from 'react-audio-player';
import image4 from '../d.jpg';


export default class artist extends React.Component{
    constructor(){
        super();
        this.state = {
            songs:[],
            url:image4    
        };
        this.handleClick = this.handleClick.bind(this); 
      }
      async componentDidMount(){
        const headers = new Headers();
        headers.append('content-Type', 'application/json');
        const token = "Bearer " + window.localStorage.getItem('token_id')
        const option = {
            method: 'get',
            headers: {"authorization": token}
        };
        debugger;
        const user_id= window.localStorage.getItem('user_id')
        const url =`http://10.14.2.15:3000/api/v1/artist/${user_id}/albums`;
        const request = new Request(url, option);
        const response = await fetch(request);
        const res = await response.json();
        const status = await response.status;
        if(status ===200){
        this.setState({
            songs: res,
        });
     }
    }
      handleClick(){
       this.props.history.push('/artist_dash')
      }
      SongHandler(SongUrl) {
          this.setState({
              url:SongUrl
          })
      }
    render(){
        return(
            <div className="background2">
                <Header/>
                <div className="artistleft col-lg-2">
                <div className="songscontainer">
                <h2>Tracks</h2>
                {this.state.songs.map((TempD)=>{ return ( <div className="songscontainer" id={TempD.url} onClick={() => this.SongHandler(TempD.url)}>
                    <h4 className="songscontainer" >{TempD.song}</h4>
                    <p className="songscontainer">{TempD.album}</p>
                     </div>)})}
                   </div>
                </div>
                <div className="artistmid col-lg-6">
                <h2>Artist Name</h2>
                <h4>Track Name</h4>
                   <img alt="Artist" className="newimage" src={this.state.url} />
                        <div>
                        <ReactAudioPlayer
                            src={this.state.url}
                            autoPlay
                            controls
                            />
                            </div>
                </div>
                <div className="artistright col-lg-3">
                <h2>Track Value</h2>
                <h3>ISO Description</h3>
                <h5>"Boulevard of Broken Dreams" as recorded on 2004 by Green Day. It was released on June, 2004</h5>
                <h4>42% Funded        28 Days Left</h4>
                <p>_______________________________</p>
                <Button.Group className="buttongroup2" floated='center'>
                    <Button>33% Offered</Button>
                    <Button>S Rights</Button>
                    <Button>5 Years</Button>
                 </Button.Group>
                <button className="newbutton2" align="center">BUY</button>
                </div>
                <div align="center"><button className="newbutton" onClick={this.handleClick}><span>Go to Dashboard</span></button></div>
            </div>
        );
    }
}
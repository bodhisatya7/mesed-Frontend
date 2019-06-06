import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Header from '../../Header/Header'
import Upload from '../../UploadImgToS3/UploadImgToS3'
import MultipleUpload from '../../UploadImgToS3/MultipleUpload'
import axios from 'axios';
import './artistdash.css'
import ReactAudioPlayer from 'react-audio-player';

class ArtistDash extends Component{
  constructor(){
    super();
    this.state = {
        songs:[],
        activeItem: 'Albums'
    }; 
  }
  async componentDidMount(){
//     const headers = new Headers();
//     headers.append('content-Type', 'application/json');
//         const token = "Bearer " + window.localStorage.getItem('token_id')
//         const option = {
//             method: 'get',
//             headers: {"authorization": token} 
//         };
//     const user_id= window.localStorage.getItem('user_id')
//     const url =`http://10.14.2.15:3000/api/v1/artist/${user_id}/albums`;
//     const request = new Request(url, option);
//     const response = await fetch(request);
//     const res = await response.json();
//     debugger;
//     const status = await response.status;
//     debugger;
//     if(status ===200){
//     this.setState({
//         songs: res,
//     });
//  }
const data = new FormData();
const user_id= window.localStorage.getItem('user_id')
const token = "Bearer " + window.localStorage.getItem('token_id')
axios.get( `http://10.14.2.15:3000/api/v1/artist/${user_id}/albums`, data, {
    headers: {
        'authorization': token
    }
   }).then( ( response ) => {
    if ( 200 === response.status ) {
      this.setState({
                songs: response,
            });
        }
      }
   )}
          SongHandler(SongUrl) {
            this.setState({
                url:SongUrl
            })
          }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    showSegment(state){
        if(this.state.activeItem==='Albums'){
            return(
               <div>
                 <div align="center">Create an album.</div>
                  <MultipleUpload />
               </div>
            )
        // }else if(this.state.activeItem==='My Sales'){
        //     return(<div><h2>To Do </h2></div>)
        }else if(this.state.activeItem==='My Songs'){
           return(<div>{this.state.songs.map((TempD)=>{ return ( <div className="songscontainer" id={TempD.url} onClick={() => this.SongHandler(TempD.url)}>
            <h4 className="songscontainer" >{TempD.song}</h4>
            <p className="songscontainer">{TempD.album}</p></div>)})}
                      <ReactAudioPlayer
                            src={this.state.url}
                            autoPlay
                            controls
                            />
            <div align="center">
              Want to Upload a New Song?
            </div>
            <Upload />
            </div>)
        // }else if(this.state.activeItem==='In-Progress'){
        //     return(<div><h2>To Do </h2></div>)
        // }else if(this.state.activeItem==='Scheduled'){
        //     return(<div><h2>To Do </h2></div>)
        // }else if(this.state.activeItem==='Live'){
        //     return(<div><h2>To Do </h2></div>)
        }
    }
    
    render() {
      const { activeItem } = this.state
  
      return (
        <div className="artistdashheader">
          <Header />
          <Menu pointing tabular>
            <Menu.Item color="white"
                name='Albums'
                active={activeItem === 'Albums'}
                onClick={this.handleItemClick} 
            />
            {/* <Menu.Item
              name='My Sales'
              active={activeItem === 'My Sales'}
              onClick={this.handleItemClick}
            /> */}
            <Menu.Item
              name='My Songs'
              active={activeItem === 'My Songs'}
              onClick={this.handleItemClick}
            />
            {/* <Menu.Item
              name='In-Progress'
              active={activeItem === 'In-Progress'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Scheduled'
              active={activeItem === 'Scheduled'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Live'
              active={activeItem === 'Live'}
              onClick={this.handleItemClick}
            /> */}
          </Menu>
  
          <Segment>
                {this.showSegment()}
          </Segment>
        </div>
      )
    }
}

export default ArtistDash;
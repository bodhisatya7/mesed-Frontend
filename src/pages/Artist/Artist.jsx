import React from 'react';
import Header from '../../Header/Header'
import { Button } from 'semantic-ui-react'
import './Artist.css'
import TempData from '../../temp.json'
// import Scroll from '../../Carousel/Carousel'
// import Card from '../../Person/Person'


export default class artist extends React.Component{
    render(){
        return(
            <div className="background2">
                <Header/>
                {/* <Card/>
                <Scroll/> */}
                <div className="artistleft col-lg-2">
                <div className="songscontainer">
                <h2>Tracks</h2>
                {TempData.map((TempD, index)=>{ return ( <div className="songscontainer">
                    <h4 className="songscontainer">{TempD.title}</h4>
                    <h6 className="songscontainer">{TempD.song}</h6>
                    <p className="songscontainer">{TempD.album}</p>
                     </div>)})}
                   </div>
                </div>
                <div className="artistmid col-lg-6">
                <h2>Artist Name</h2>
                <h4>Track Name</h4>
                   <img className="newimage" src="http://promotionmusicnews.com/promotionmusicnews.com/html/wp-content/uploads/Green-Day-750x400.jpg" />
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
            </div>
        );
    }
}
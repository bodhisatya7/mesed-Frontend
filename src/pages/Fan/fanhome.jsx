import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './fanhome.css';
import TempData from '../../temp.json';
import Header from '../../Header/Header'
// import image1 from '../a.jpeg';
// import image2 from '../b.jpg';
// import image3 from '../c.jpg';
 import image4 from '../d.jpg';
 //import image5 from '../e.jpg';


const responsive = {
     desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 3
     },
     tablet: {
       breakpoint: { max: 1024, min: 464 },
       items: 2
     },
     mobile: {
       breakpoint: { max: 464, min: 0 },
       items: 1
     }
   };
class Fan extends Component{
   constructor(){
     super();
     this.handleClick = this.handleClick.bind(this); 
   }
   handleClick(){
    this.props.history.push('/fan_dash')
   }
 render() {
            return(
                <div>
                   <Header />
                     <div class="row">
                     <div className="lef col-lg-2">
                    <div className="topnav">
                         <input type="text" placeholder="Type any artist, genre, mood etc.." />
                         <button className="button" ><span>Play All</span></button>
                         <p>__________________________________</p>
                         <div className="buttons">
                         <button>Rock</button>
                         <button>Pop</button>
                         <button>RnB</button>
                         <button>Metal</button>
                         <button>Alternative Rock</button>
                         <button>Countryside</button>
                         <button>Rap</button>
                         <button>Romantic</button>
                         <button>Sad</button>
                         <button>Orchestra</button>                      
                         <button>Dance</button>
                         <button>Western</button>
                         <button>Classic</button>
                         <button>EDM</button>
                         <button>Acoustic</button>
                         <button>Blues</button>
                         <button>Jazz</button>
                         <button>Folk</button>
                         <button>Soul Music</button>
                         <button>Instrumental</button>
                         <button>Heavy Metal</button>
                         <button>Disco</button>
                         <button>Funk</button>
                         <button>Reggae</button>
                         <button>Dubstep</button>
                         </div>
                         </div>
                    </div>
                         <div className="mid col-lg-6">
                          {/* {TempData.map((TempD, index)=>{ return ( <div>
                            <Card><Card.Img src={TempD.image} /></Card>
                          </div>)})} */}
                          <Card><Card.Img src={image4} /></Card>
                            </div>
                    <div className="rig col-lg-3">
                         <div className="song-des">
                            <h3> Song Name </h3>
                            <p>Song Description goes here...</p>
                            <p>A song is a single musical composition that has a melody and, often, words that are sung by a vocalist. The words of a song, as a whole, are called the lyrics, and they may include verses that tell a tale or move a story along, and refrains, or short phrases repeated at the end of each verse.
                            At its most basic, a song is a short piece of music, usually with words. It combines melody and vocals, although some composers have written instrumental pieces, or musical works without words, that mimic the quality of a singing voice. The words of a song are called lyrics. Lyrics can include a series of verses, the longer sections of the song that tell the story, and a refrain, a short phrase repeated at the end of every verse. Songs can have a simple structure of one or two verses, or a more complex one with multiple verses and refrains. Songs usually have a meter or beat. Whether you sing or speak the lyrics, you can feel a pattern or pulse in the way the words move the song forward.

                            The word 'song' has been around for a very long time, and it connects back to Old English and Old Norse languages. As such a history suggests, songs are used for many purposes: to tell stories, express emotions, or convey a belief in faith. Sometimes they give instructions or help make difficult, repetitive work a little less tiresome.
                            </p>
                         </div>
                    </div>
                </div>
                <div align="center"><button className="newbutton" onClick={this.handleClick}><span>Go to Dashboard</span></button></div>
                     <div className="col-12">
                      <div className="artists-car" align="center">

                              <Carousel
                              swipeable={true}
                              draggable={true}
                              showDots={false}
                              responsive={responsive}
                              ssr={true}
                              slidesToSlide={1}
                              infinite={true}
                              autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={500}
                              keyBoardControl={true}
                              customTransition="all .5"
                              transitionDuration={2000}
                              containerClass="carousel-container"
                              removeArrowOnDeviceType={["tablet", "mobile"]}
                              deviceType={this.props.deviceType}
                              dotListClass="custom-dot-list-style"
                              itemClass="carousel-item-padding-40-px"
                              >
                              {TempData.map((TempD, index)=>{ return ( <div> <img
                                className="d-block"
                                src={TempD.image}
                                alt={TempD.id}
                                onClick={this.showCard}
                              /><h4>{TempD.title}</h4> </div>)})}
                              </Carousel>

                        </div>
                        </div>
                    </div>
            );
        }
}

export default Fan;
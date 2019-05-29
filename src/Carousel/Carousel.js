import React, {Component} from 'react';
import './Corousel.css'
import Card from './cardComponent'

export default class carousel extends Component {
    render () {
        return (
//     <div className="container container-class">
//   <h2>Carousel Example</h2>  
//   <div id="myCarousel" className="carousel slide" data-ride="carousel">
//     <ol className="carousel-indicators">
//       <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//       <li data-target="#myCarousel" data-slide-to="1"></li>
//       <li data-target="#myCarousel" data-slide-to="2"></li>
//     </ol>

//     <div className="carousel-inner">
//       <div className="item active">
//         <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" alt="Los Angeles" />
//         <div class="card">
//         <div class="card-body">Basic card</div>
// </div>
//       </div>

//       <div className="item">
//         <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" alt="Chicago" />
//       </div>
    
//       <div className="item">
//         <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" alt="New york" />
//       </div>
//     </div>

//     <a className="left carousel-control" href="#myCarousel" data-slide="prev">
//       <span className="glyphicon glyphicon-chevron-left"></span>
//       <span className="sr-only">Previous</span>
//     </a>
//     <a className="right carousel-control" href="#myCarousel" data-slide="next">
//       <span className="glyphicon glyphicon-chevron-right"></span>
//       <span className="sr-only">Next</span>
//     </a>
//   </div>
// </div>

<div id="demo" className="carousel slide" data-ride="carousel">

<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div className="carousel-inner">
  <div className="carousel-item active">
  <div className="row">
  <Card/>
<Card/>

</div>
  </div>
  <div className="carousel-item">
  <div className="row">
  <Card/>
<Card/>

</div>
  </div>
  <div className="carousel-item">
      <div className="row">
  <Card/>
<Card/>

</div>
  </div>
</div>

<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>

        );

    }
}
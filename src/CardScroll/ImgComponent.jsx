import React from 'react';
import 'bootstrap';
function Person(props){
    return(<div>
<div className="container">
 <div className="carousel slide">
  <div className="carousel-inner">
    <div className="overlay"></div>
    <div className="item active">
        <a href=""><img src="http://www.placehold.it/900x500&text=One" /></a>
    </div>
    <div class="item">
        <a href=""><img src="http://www.placehold.it/900x500&text=Two" /></a>
    </div>
    <div class="item">
        <a href=""><img src="http://www.placehold.it/900x500&text=Three" /></a>
    </div>
 </div>
 <a class="carousel-control left" href=".carousel" data-slide="prev">‹</a>
 <a class="carousel-control right" href=".carousel" data-slide="next">›</a>
  </div>
 </div>
  </div>
    );
  }
  export default Person
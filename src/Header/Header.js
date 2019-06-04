import React, {Component} from 'react';
import './Header.css';
import './font-awesome.css';
import './icon-font.css';
export default class header extends Component {
     
    render() {
        return(
            <div >
               
            {/* <nav className="navbar  navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    
                    <a className="navbar-brand" href="">Portfolio</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className=" active"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#">About</a></li>
                        <li className="nav-item"><a href="#">Gallery</a></li>
                        <li className="nav-item"><a href="#">Contact</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}


<div className="sticky-header left-side-collapsed">
<section>
        <div id="left-side" className="left-side sticky-left-side">

<div className="logo">
    <h1><a href="/fan_home">Mosai<span>c</span></a></h1>
</div>
<div className="logo-icon text-center">
    <a href="/">M </a>
</div>
<div class="main-content">
			<div class="header-section">
            <div >
</div>
<div className="logo-icon">
    <a href="/">OneClef</a>
</div>
			{/* <a class="toggle-btn  menu-collapsed"><i class="fa fa-bars"></i></a> */}
            </div>
        </div>
<div className="left-side-inner">

        <ul className="nav nav-pills nav-stacked custom-nav">
            <li className="active"><a href="/fan_home"><i className="lnr lnr-home" ></i><span>Home</span></a></li>
            <li><a href="/fan_dash"><i className="camera"></i> <span>Radio</span></a></li>
            <li><a href="/artist_dash" data-toggle="modal" data-target="#myModal1"><i className="fa fa-th"></i><span>Apps</span></a></li>
            <li><a href="/artist_home"><i className="lnr lnr-users"></i> <span>Artists</span></a></li> 
            <li><a href="/login"><i className="lnr lnr-music-note"></i> <span>Albums</span></a></li>						
            <li className="menu-list"><a href="/register"><i className="lnr lnr-indent-increase"></i> <span>Browser</span></a>  
                <ul className="sub-menu-list">
                    <li><a href="/">Artists</a> </li>
                    <li><a href="/">Services</a> </li>
                </ul>
            </li>
            <li><a href="/"><i className="lnr lnr-book"></i><span>Blog</span></a></li>
            <li><a href="/"><i className="lnr lnr-pencil"></i> <span>Typography</span></a></li>
            <li className="menu-list"><a href="/"><i className="lnr lnr-heart"></i>  <span>My Favourities</span></a> 
                <ul className="sub-menu-list">
                    <li><a href="/">All Songs</a></li>
                </ul>
            </li>
            <li className="menu-list"><a href="/"><i className="fa fa-thumb-tack"></i><span>Contact</span></a>
                <ul className="sub-menu-list">
                    <li><a href="/">Location</a> </li>
                </ul>
            </li>     
        </ul>
</div>
</div>

        <div class="clearfix"></div>
        </section>
</div>
</div>

        );
    }
}
import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import './Header.css';
import './font-awesome.css';
import './icon-font.css';
export default class header extends Component {
    constructor(){
        super();

        this.state = {
         login:'Login'
        }
        this.logoutHandle = this.logoutHandle.bind(this);
        this.loginHandle = this.loginHandle.bind(this);  
    }

    componentDidMount(){
        const user_id= window.localStorage.getItem('user_id')

        if(user_id) {
           document.getElementById('login').style.visibility = 'hidden'
        }
        else {
            document.getElementById('logout').style.visibility = 'hidden'
        }
    }
    logoutHandle() {
        window.localStorage.removeItem("user_id");
        window.localStorage.removeItem("token_id");
        alert('You are successfully logged out!')
        window.location = "/";
    }
    loginHandle() {
        window.location = "/login";
    }
        
    render() {
        return(
            <div >
        <div className="sticky-header left-side-collapsed">
        <section>
        <div id="left-side" className="left-side sticky-left-side">

        <div className="logo">
            <h1><a href="/">Mosai<span>c</span></a></h1>
        </div>
        <div className="logo-icon text-center">
            <a href="/">M </a>
        </div>
        <div class="main-content">
                    <div class="header-section">
                    <div >
        </div>
        <div className="logo-icon ">
            <a href="/" className='col-mg-3'>OneClef</a>
            <Button.Group floated='right' className = 'col-mg-3'>
            <Button id = "login" onClick={this.loginHandle}>Login</Button>
            <Button id= "logout" onClick={this.logoutHandle}>Logout</Button>
            </Button.Group>
        </div>
                    </div>
                </div>
        <div className="left-side-inner">
        <ul className="nav nav-pills nav-stacked custom-nav">
       
            <li className="active"><a href="/"><i className="lnr lnr-home" ></i><span >Home</span></a></li>
            <li><a href="/artist"><i className="lnr lnr-users"></i> <span >Artists</span ></a></li> 
            <li><a href="/artist_dash"><i className="lnr lnr-music-note"></i> <span >Albums</span></a></li>
            <li className="menu-list"><a href="/fan_dash"><i className="lnr lnr-heart"></i> <span >My Favourities</span></a></li>
        </ul>
    
                     </div>
                 </div>
             <div class="clearfix"></div>
             <div />
           </section>
         </div>
     </div>

        );
    }
}
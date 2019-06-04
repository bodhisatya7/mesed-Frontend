import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
<<<<<<< HEAD
import Login from './pages/login'
import HomeScreen from './HomeScreen/HomeScreen'
import Person from './Person/Person'
import Artist from './Artist/Artist'
import upload from './UploadImgToS3/UploadImgToS3'
=======
import Helmet from 'react-helmet';
import Login from './pages/login';
import Register from './pages/register';
import HomeScreen from './HomeScreen/HomeScreen';
import Person from './Person/Person';
import Artist from './pages/Artist/Artist';
import Fan from './pages/Fan/fanhome';
import FanDash from './pages/Fan/fandash';
import ArtistHome from './pages/Artist/artisthome';
import ArtistDash from './pages/Artist/artistdash';
>>>>>>> 4a3186cc419d6b6ca144a97501f75a1d024a5229


function App() {
  
    return(<div className="App">
    <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link>
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/coreui-icons.min.css"></link>
    <Helmet bodyAttributes={{style: 'background-color :  #262626'}}/>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/artist" component={Artist} />
    <Route exact path="/person" component={Person} />
<<<<<<< HEAD
    <Route exact path="/upload" component={upload} />
=======
    <Route exact path="/fan_home" component={Fan} />
    <Route exact path="/fan_dash" component={FanDash} />
    <Route exact path="/artist_home" component={ArtistHome} />
    <Route exact path="/artist_dash" component={ArtistDash} />
>>>>>>> 4a3186cc419d6b6ca144a97501f75a1d024a5229
    </div>);
  }
    

export default App;
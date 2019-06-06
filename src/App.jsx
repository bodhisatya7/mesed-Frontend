import React from 'react';
import './App.css';
// import { Route } from "react-router";
import { PrivateRoute } from './components/PrivateRoute'
import { ReverseRoute } from './components/ReverseRoute'
import Helmet from 'react-helmet';
import Login from './pages/login';
import Register from './pages/register';
import HomeScreen from './HomeScreen/HomeScreen';
import Artist from './pages/Artist/Artist';
import Fan from './pages/Fan/fanhome';
import FanDash from './pages/Fan/fandash';
import ArtistHome from './pages/Artist/artisthome';
import ArtistDash from './pages/Artist/artistdash';



function App() {
    return(
    <div className="App">
        <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link>
        <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/coreui-icons.min.css"></link>
        <Helmet bodyAttributes={{style: 'background-color :  #262626'}}/>
        <ReverseRoute exact path="/" component={HomeScreen} />
        <ReverseRoute exact path="/login" component={Login} />
        <ReverseRoute exact path="/register" component={Register} />
        <ReverseRoute exact path="/artist_home" component={ArtistHome} />
        <PrivateRoute exact path="/artist" component={Artist} />
        <PrivateRoute exact path="/artist_dash" component={ArtistDash} />
        <PrivateRoute exact path="/fan_home" component={Fan} />
        <PrivateRoute exact path="/fan_dash" component={FanDash} />
    </div>
           )
        }
    

export default App;
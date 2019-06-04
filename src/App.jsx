import React from 'react';
import './App.css';
import Register from './pages/register';
import { Route } from "react-router-dom";
import Login from './pages/login'
import HomeScreen from './HomeScreen/HomeScreen'
import Person from './Person/Person'
import Artist from './Artist/Artist'
import upload from './UploadImgToS3/UploadImgToS3'


function App() {
  
    return(<div className="App">
    <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css"></link>
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/coreui-icons.min.css"></link>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/artist" component={Artist} />
    <Route exact path="/person" component={Person} />
    <Route exact path="/upload" component={upload} />
    </div>);
  }
    

export default App;
import React from 'react';
import Header from './../Header/Header'
import Scroll from '../Carousel/Carousel'
import Card from './../Person/Person'
export default class artist extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Card/>
                <Scroll/>
            </div>
        );
    }
}
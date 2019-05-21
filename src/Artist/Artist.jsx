import React from 'react';
import Header from './../Header/Header'
import Scroll from '../CardScroll/CardScroll'
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
import React from 'react'
import './HomeScreen.css'

class homeScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    async handleSubmit(event) {
        event.preventDefault();
        this.props.history.push('/login')
    }
    async handleClick(event) {
        event.preventDefault();
        this.props.history.push('/artist_home')
    }
   render(){ return (
        <div className="Hs">
            <div className="split left" onClick={this.handleSubmit}>
                <div className="centered">
                    <h2 className="text">Fan</h2>
                    <p>Join Us</p>
                </div>
            </div>
            <div className="split middle" onClick={this.handleClick}>
                <div className="centered">
                    <h2 className="text" >Artist</h2>
                    <p>Join Us</p>
                </div>
            </div>
            <div className="split right" onClick={this.handleSubmit}>
                <div className="centered">
                    <h2 className="text">Investor</h2>
                    <p>Join Us</p>
                </div>
            </div>
        </div>
    )
}
}
export default homeScreen
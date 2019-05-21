import React from 'react'
import './HomeScreen.css'

class homeScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    async handleSubmit(event) {
        event.preventDefault();
        this.props.history.push('/login')
    }
   render(){ return (
       <div>
        <div className="Hs">
            <div className="split left" onClick={this.handleSubmit}>
                <div className="centered">
                    <h2 className="text">Fan</h2>
                    <p>Some text.</p>
                </div>
            </div>
            <div className="split middle" onClick={this.handleSubmit}>
                <div className="centered">
                    <h2 className="text" >Artist</h2>
                    <p>Some text.</p>
                </div>
            </div>
            <div className="split right" onClick={this.handleSubmit}>
                <div className="centered">
                    <h2 className="text">Invester</h2>
                    <p>Some text.</p>
                </div>
            </div>
            
        </div>
        </div>
    )
}
}
export default homeScreen
import React from 'react';
import {
Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button  } from 'reactstrap';
  
import './Header.css';
  
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user_id: null,
      token_id: null,
      display_name:null

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  async componentDidMount(){
    const headers = new Headers();
    headers.append('content-Type', 'application/json');
    const option = {
        method: 'post',
        headers,
        body:JSON.stringify({"email": "nidhi.r8qi@gmail.com",
        "password": "Pra889288"})

    };
    const url ="http://localhost:3030/api/v1/user/login";
    const request = new Request(url, option);
    const response = await fetch(request);
    const status = await response.json();
    this.setState({user_id:status.user_id,token_id:status.token_id, display_name:status.display_name, loading: false})
}
 
  render() {
    return (
      <div>
        
        <div>
        <Card className="card" light>
          <CardImg src="./abstract.jpg" className="img-responsive img" alt="Transparent MDB Logo" id="animated-img1"/>
          <CardBody>
            <CardTitle>{this.state.user_id}</CardTitle>
            <CardSubtitle>{this.state.token_id}</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
      </Card>
        </div>

        <div>
        <Card className="card" light>
          <CardImg top width="33%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" className="img" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
      </Card>
        </div>
      </div>
    );
  }
}
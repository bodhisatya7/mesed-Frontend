import React from 'react'
import './../Person/Person.css'
import 'bootstrap'

class person extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            first_name: null,
            last_name: null,
            email: "pramod",
            phone_number: null,
            role: null,
            age: null,
            dob: null,
            city: null,
            state: null,
            country: null,
            postal_code: null,
            display_name: null,
            display_picture: null,
            about: null,
            availability: 0
    
        };
      }
    
        
      async componentDidMount(){
        const headers = new Headers();
        headers.append('content-Type', 'application/json');
        const option = {
            method: 'get',
            headers:JSON.stringify({"token": window.localStorage.getItem('token_id')}),
            // body:JSON.stringify({"userId": "36df28e0-788c-11e9-bf82-db22f89ba3a5"})
    
        };
        const user_id= window.localStorage.getItem('user_id')
        const url =`http://localhost:3000/api/v1/artist/${user_id}`;
        const request = new Request(url, option);
        const response = await fetch(request);
        const res = await response.json();
        this.setState({
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email,
            phone_number: res.phone_number,
            role: res.role,
            age: res.age,
            dob: res.bod,
            city: res.city,
            state: res.state,
            country: res.country,
            postal_code: res.postal_code,
            display_name: res.display_name,
            display_picture: res.display_picture,
            about: res.about,
            availability:0
    
        })
    }
    render() {
        return(
            <div class="container-fuid person">
                 <div class="card artistInfo float-left ">
                    <img class="card-img-top"  src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">{this.state.first_name}{this.state.last_name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                  {/* <div class="card artistInfo float-left">
                    <img class="card-img-top"  src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">{this.state.first_name}{this.state.last_name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div> */}
            </div>
        );
    }
}
export default person
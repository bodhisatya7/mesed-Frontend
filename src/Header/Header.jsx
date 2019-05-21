import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, InputGroup, Input} from 'reactstrap';
  
import './Header.css';
import 'bootstrap'
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
          <Navbar color="dark" className="px-3 header" dark expand="md">
            <NavbarBrand href="/" >Mased</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <InputGroup size="sm">
                  <Input placeholder="Search"/>
                </InputGroup>
                <NavItem>
                  <NavLink href="/profile/">{this.state.display_name}</NavLink>
                </NavItem>
                
                <NavItem>
                
                  <NavLink href="#">upload</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        
      </div>
    );
  }
}
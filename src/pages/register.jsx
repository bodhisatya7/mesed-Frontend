import React, { Component } from "react";

import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      role: "",
      password: "",
      confirm_password: "",
      formSubmitted: false,
      hasError: false,
      person: null
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ formSubmitted: true });
    const { email, password, first_name, last_name, role } = this.state;
    if (first_name && last_name && email && password && role) {
      const headers = new Headers();
      headers.append('content-TYpe', 'application/json');
      const option = {
          method: 'post',
          headers,
          body:JSON.stringify({"email": email,
          "password": password, 
          "first_name": first_name, 
          "last_name": last_name, 
          "role": role
        })
      };

      const url ="http://10.14.7.204:3030/api/v1/user/register";
      const request = new Request(url, option);
      const response = await fetch(request);
      const status = await response.json();
      this.setState({person:status.user_id, loading: false})
      window.localStorage.setItem('user_id', status.user_id)
    }
  }
  render() {
    const { formSubmitted, email, password, first_name, last_name, phone_number, role } = this.state;
    return (
      <div className="app flex-row align-items-center pace-done bc-admin-login-bg">
        <div className="pace  pace-inactive">
          <div
            className="pace-progress"
            data-progress-text="100%"
            data-progress="99"
            style={{ transform: "translate3d(100%, 0px, 0px)" }}
          >
            <div className="pace-progress-inner" />
          </div>
          <div className="pace-activity" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group">
                <div className="card p-4">
                  <div className="card-body">
                    <h1>Sign Up</h1>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="cui-user" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={this.onChange}
                        value={this.state.first_name}
                      />
                    </div>
                    {formSubmitted && !first_name && (
                      <div className="help-block">First Name is required</div>
                    )}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="cui-user" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={this.onChange}
                        value={this.state.last_name}
                      />
                    </div>
                    {formSubmitted && !last_name && (
                      <div className="help-block">Last Name is required</div>
                    )}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="cui-envelope-closed" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                    </div>
                    {formSubmitted && !email && (
                      <div className="help-block">Email is required</div>
                    )}
                     <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="cui-phone" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="tel"
                        name="phone_number"
                        placeholder="Phone Number"
                        onChange={this.onChange}
                        value={this.state.phone_number}
                      />
                    </div>
                    {formSubmitted && !phone_number && (
                      <div className="help-block">Phone Number is required</div>
                    )}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        <i className="cui-user" />
                        </span>
                      </div>
                      <form onChange={this.onChange} value={this.state.role}>
                        <select name="role">
                         <option value="role">Choose a Role</option>
                         <option value="artist">Artist</option>
                         <option value="fan">Fan</option>
                         <option value="investor">Investor</option>
                      </select>
                      </form>
                    </div>
                    {formSubmitted && !role && (
                      <div className="help-block">Role is required</div>
                    )}
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="cui-lock-locked" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                      />
                    </div>
                    {formSubmitted && !password && (
                      <div className="help-block">Password is required</div>
                    )}
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="cui-lock-locked" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        onChange={this.onChange}
                        value={this.state.confirm_password}
                      />
                    </div>
                    <div className="row">
                      <div className="col-6" style={{ padding: 0 }}>
                        <button
                          className="btn btn-primary px-4 bc-admin-bg-blue"
                          type="button"
                          onClick={this.handleSubmit}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <p>Already have an account? <a href="/login">Login</a>
                    </p>
                  </div>
                </div>
                <div
                  className="card text-white bg-primary py-5 d-md-down-none bc-admin-bg-blue"
                  style={{ width: "44%" }}
                >
                  <div className="card-body text-center bc-admin-flex-center">
                    <h4>Mased-Eva Sign Up</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Register;
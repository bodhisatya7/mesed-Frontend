import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formSubmitted: false,
      hasError: false,
      person: null,
      loading: true
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
    const { email, password } = this.state;
    if (email && password) {
      const headers = new Headers();
      headers.append('content-TYpe', 'application/json');
      const option = {
          method: 'post',
          headers,
          body:JSON.stringify({"email": email,
          "password": password})
      };

      const url ="http://localhost:3000/api/v1/user/login";
      const request = new Request(url, option);
      const response = await fetch(request);
      const res = await response.json();
      const status = await response.status;
      debugger;
      if(status ===200){
        this.setState({person:res.user_id, loading: false})
        window.localStorage.setItem('user_id', res.user_id)
        window.localStorage.setItem('token_id', res.token_id)
        this.props.history.push('/header')
      }
      else{
        alert("worng");
      }
    }
  }
  render() {
    const { formSubmitted, email, password } = this.state;
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
                    <h1>Login</h1>
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
                    <div className="row">
                      <div className="col-6" style={{ padding: 0 }}>
                        <button
                          className="btn btn-primary px-4 bc-admin-bg-blue"
                          type="button"
                          onClick={this.handleSubmit}

                        >
                      Login                      
                      </button>
                      </div>
                    </div>
                    <p>Don't have an account? <a href="/register">Sign Up</a>
                     </p>
                  </div>
                </div>
                <div
                  className="card text-white bg-primary py-5 d-md-down-none bc-admin-bg-blue"
                  style={{ width: "100%" }}
                >
                  <div className="card-body text-center bc-admin-flex-center">
                    <h4>Mased-Eva Login</h4>
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

export default Login;
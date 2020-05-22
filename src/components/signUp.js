import React, { Component } from 'react';


class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  onInputChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    // console.log(event.target.value);
  }

  onInputChangeUsername = (event) => {
    this.setState({ username: event.target.value });
    // console.log(event.target.value);
  }

  onInputChangePassword = (event) => {
    this.setState({ password: event.target.value });
    // console.log(event.target.value);
  }


  render() {
    return (
      <div className="inputBar">
        <input type="text" placeholder="Email" onChange={this.onInputChangeEmail} value={this.state.email} />
        <input type="text" placeholder="Username" onChange={this.onInputChangeUsername} value={this.state.username} />
        <input type="text" placeholder="Password" onChange={this.onInputChangePassword} value={this.state.password} />

        <button className="inputbutton" type="submit">Sign up</button>
      </div>
    );
  }
}

export default signUp

import React, { Component } from 'react';


class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onInputChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    // console.log(event.target.value);
  }

  onInputChangePassword = (event) => {
    this.setState({ password: event.target.value });
    // console.log(event.target.value);
  }


  makeUser = () => {
    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.signinUser(newUser, this.props.history);
  }

  render() {
    return (
      <div className="inputBar">
        <input type="text" placeholder="Email" onChange={this.onInputChangeEmail} value={this.state.email} />
        <input type="text" placeholder="Password" onChange={this.onInputChangePassword} value={this.state.password} />

        <button className="inputbutton" type="submit">Sign in</button>
      </div>
    );
  }
}

export default signIn;

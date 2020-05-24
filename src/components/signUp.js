import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
  // TouchableOpacity,
} from 'react-native';


class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // onInputChangeEmail = (event) => {
  //   this.setState({ email: event.target.value });
  //   // console.log(event.target.value);
  // }

  // onInputChangeUsername = (event) => {
  //   this.setState({ username: event.target.value });
  //   // console.log(event.target.value);
  // }

  // onInputChangePassword = (event) => {
  //   this.setState({ password: event.target.value });
  //   // console.log(event.target.value);
  // }


  render() {
    return (
      <View style={styles.container}>
        <Text> Sign Up Here!</Text>
        <View>
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Email" onChange={this.onInputChangeEmail} value="hello" />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Username" onChange={this.onInputChangeUsername} value="hello" />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Password" onChange={this.onInputChangePassword} value="hello" />

          <TouchableOpacity style={styles.button}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

export default signUp;

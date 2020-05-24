import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, Button, navigation
  // TouchableOpacity,
} from 'react-native';

import MainNavigator from '../navigation/stackNavigator';


class signUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onInputChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
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
      <View style={styles.container}>
        <Text > Sign Up Here!</Text>
        <View>
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Email" onChange={this.onInputChangeEmail} value={this.state.email} />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Username" onChange={this.onInputChangeUsername} value={this.state.username} />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Password" onChange={this.onInputChangePassword} value={this.state.password} />

          <Button
            title="Sign up"
            onPress={() => this.props.navigation.navigate('New User Flow')}
          />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign in')}> 
            <Text>Already have an account? Log in here!</Text>
        </TouchableOpacity>   
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

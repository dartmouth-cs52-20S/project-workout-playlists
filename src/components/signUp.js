import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, Button, navigation
  // TouchableOpacity,
} from 'react-native';

import { signupUser } from '../actions/index';


class signUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      spotifyID: '',
      password: '',
      genres: [],
      acousticness: false,
      instrumentalness: false,
      liveness: false,
      loudness: false,
      popularity: false,
      valence: false,
    };
  }

  onInputChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  onInputChangeUsername = (event) => {
    this.setState({ spotifyID: event.target.value });
    // console.log(event.target.value);
  }

  onInputChangePassword = (event) => {
    this.setState({ password: event.target.value });
    // console.log(event.target.value);
  }

  makeUser = () => {
    const newUser = {
      spotifyID: this.state.spotifyID,
      genres: this.state.genres,
      acousticness: this.state.acousticness,
      instrumentalness: this.state.instrumentalness,
      liveness: this.state.liveness,
      loudness: this.state.loudness,
      popularity: this.state.popularity,
      valence: this.state.valence,
    };
    this.props.signupUser(newUser, this.props.history);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text > Sign Up Here!</Text>
        <View>
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Email" onChange={this.onInputChangeEmail} value={this.state.email} />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="spotify ID" onChange={this.onInputChangeUsername} value={this.state.spotifyID} />
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

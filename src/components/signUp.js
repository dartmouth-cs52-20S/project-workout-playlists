import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, Button, navigation, Image
  // TouchableOpacity,
} from 'react-native';

import { signupUser } from '../actions/index';

import { withOrientation } from 'react-navigation';

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
    console.log('hi');
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
    console.log('pre signup user');
    this.props.signupUser(newUser, this.props.history);
    console.log('post signup user');
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('../imgs/logo.png')} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="black" onChange={this.onInputChangeEmail} value={this.state.email} />
          <TextInput style={styles.input} placeholder="spotify ID" placeholderTextColor="black" onChange={this.onInputChangeUsername} value={this.state.spotifyID} />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" onChange={this.onInputChangePassword} value={this.state.password} />

          <Button
            title="Sign up"
            onPress={() => {
              this.makeUser();
              this.props.navigation.navigate('New User Flow')
            }
            }
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
    backgroundColor: 'white',
  },
  logocontainer:{
    display: 'flex',
    justifyContent: 'center',
    width: 350,
    height: 200,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'orange',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default connect(null, { signupUser })(signUp);

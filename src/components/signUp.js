/* eslint-disable no-return-assign */
/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet, View, Text, Button, TouchableOpacity, Image,
  // TouchableOpacity,
} from 'react-native';

import { WebView } from 'react-native-webview';
import { authenticate } from '../actions';
import spotifyCredentials from '../secrets';

const { clientId } = spotifyCredentials; // Your client id
const { redirectUri } = spotifyCredentials; // Your redirect uri


class signUp extends Component {
  webview = null;

  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };
  }

  onLogin = () => {
    console.log('logging in');
    this.setState({ login: true });
  }

  handleSpotifyAuth = (newNavState) => {
    console.log('handling!');
    const { url } = newNavState;
    console.log('url', url);
    if (!url) return;

    if (url.includes('?message=authSuccess')) {
      console.log('success!');
      const tokenStartIndex = url.indexOf('token') + 6;
      const data = url.substring(tokenStartIndex, url.length);
      const dataArr = data.split('?');
      const accessToken = dataArr[0];

      const spotifyID = dataArr[1].substring(10, dataArr[1].length);

      this.props.authenticate(accessToken, spotifyID);
      console.log('authenticated!');
      this.webview.stopLoading();
      // this.props.navigation.navigate('New User Flow'); // fix so everytime log in this doesn't happen, maybe have message in url?
    }
  }

  // https://accounts.spotify.com/authorize?client_id=ae55627afa544de2b83131f8bd07d685&response_type=code&redirect_uri=http://localhost:9090/api/callback
  // &scope=user-read-private%20user-read-email&state=34fFs29kd09

  render() {
    const scopes = 'user-read-private user-read-email user-modify-playback-state user-read-playback-state';
    if (this.state.login) {
      return (
        <WebView
          ref={(ref) => (this.webview = ref)}
          source={{
            uri: `${'https://accounts.spotify.com/authorize'
            + '?client_id='}${`${clientId
            }&response_type=code`
            }&redirect_uri=${encodeURIComponent(redirectUri)}`
            + `&scope=${encodeURIComponent(scopes)}`,
          }}
          style={{ marginTop: 20, flex: 1 }}
          onNavigationStateChange={this.handleSpotifyAuth}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../imgs/logo.png')} />
          </View>
          <View>
            <Button
              title="Log in with Spotify"
              onPress={() => {
                this.onLogin();
              }}
            />
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign in')}>
            <Text>Already have an account? Log in here!</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
  logocontainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 350,
    height: 200,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
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

export default connect(null, { authenticate })(signUp);

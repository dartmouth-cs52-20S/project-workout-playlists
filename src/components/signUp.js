/* eslint-disable no-return-assign */
/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';

import { WebView } from 'react-native-webview';
import { authenticate, fetchUser } from '../actions';


class signUp extends Component {
  webview = null;

  constructor(props) {
    super(props);

    this.state = {
      login: false,
      visible: true,
    };
  }

  onLogin = () => {
    this.setState({ login: true });
  }

  hideSpinner = () => {
    this.setState({ visible: false });
  }

  handleSpotifyAuth = (newNavState) => {
    const { url } = newNavState;
    if (!url) return;

    if (url.includes('?message=authSuccess')) {
      const tokenStartIndex = url.indexOf('spotifyID') + 10;
      const spotifyID = url.substring(tokenStartIndex, url.length);

      this.props.fetchUser(spotifyID);
      this.webview.stopLoading();
      this.props.navigation.navigate('New User Flow');
    }
  }


  render() {
    const clientId = 'ae55627afa544de2b83131f8bd07d685';
    // const redirectUri = 'https://workout-playlists-final-proj.herokuapp.com/api/callback';
    const redirectUri = 'http://localhost:9090/api/callback';
    const scopes = 'user-read-private user-read-email user-modify-playback-state user-read-playback-state user-read-currently-playing user-top-read playlist-modify-public';
    if (this.state.login) {
      return (
        <View style={{ flex: 1 }}>
          <WebView
            onLoad={() => this.hideSpinner()}
            ref={(ref) => (this.webview = ref)}
            source={{
              uri: `${'https://accounts.spotify.com/authorize'
            + '?client_id='}${`${clientId
              }&response_type=code`
              }&redirect_uri=${encodeURIComponent(redirectUri)}`
            + `&scope=${encodeURIComponent(scopes)}&show_dialog=true`,
            }}
            style={{ marginTop: 20, flex: 1 }}
            onNavigationStateChange={this.handleSpotifyAuth}
          />
          {this.state.visible && (
          <ActivityIndicator
            color="#FF8F33"
            style={{ position: 'absolute', top: 350, left: 180 }}
            size="large"
          />
          )}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../imgs/logo3.png')} />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.onLogin();
            }}
          >
            <Text style={{ color: 'white', fontSize: '17' }}>Log In With Spotify</Text>
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
    backgroundColor: 'rgb(255,115,0)',
    padding: 10,
    borderRadius: 20,
  },
  input: {
    width: 350,
    height: 55,
    // backgroundColor: '#FF8F33',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    borderColor: '#FF8F33',
    borderWidth: 2,
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, { fetchUser, authenticate })(signUp);

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
  TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { fetchPlaylists, fetchPlaylist, eraseError } from '../actions/index';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Main extends Component {
  componentDidMount() {
    this.props.fetchPlaylists(this.props.user.id);
  }

  goToPlaylist = (ID) => {
    this.props.eraseError();
    this.props.fetchPlaylist(ID);
    this.props.navigation.navigate('Display New');
  }

  render() {
    if (this.props.all.length === 0) {
      if ((this.props.none)) {
        return (
          <View style={styles.container}>
            <View style={styles.logocontainer}>
              <Image style={styles.logo} source={require('../imgs/logo3.png')} />
            </View>
            <View style={styles.modal}>
              <View style={styles.textcontainer}>
                <Text style={styles.text}>Your recent playlists:</Text>
              </View>
              <View style={styles.warningContainer}>
                <Text style={styles.warningFont}>Looks like you haven't created any playlists yet! Click the new playlist button to get started.</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Workout Selector')} style={styles.button}>
                <Text style={styles.btnText}>New Playlist</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('My Playlists')} style={styles.button}>
                <Text style={styles.btnText}>My Playlists</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      } else {
        return (
          <ActivityIndicator
            color="#FF8F33"
            style={{ position: 'absolute', top: 350, left: 180 }}
            size="large"
          />
        );
      }
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.responsiveBox}>
          <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../imgs/logo3.png')} />
          </View>
          <View style={styles.modal}>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>Your recent playlists:</Text>
            </View>
            {this.props.all.slice(0, 4).map((playlist) => (
              <View style={styles.playlistcontainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.goToPlaylist(playlist.id);
                  }}
                  style={styles.playlist}
                >
                  <Text style={{
                    color: 'rgb(255,115,0)', fontFamily: 'Avenir', fontSize: 17, paddingVertical: 15, paddingLeft: 10, margin: 2, backgroundColor: 'white',
                  }}
                  >
                    {playlist.playlistName}
                    {' ('}
                    {playlist.workoutType}
                    {')'}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}

          </View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Workout Selector')} style={styles.button}>
              <Text style={styles.btnText}>New Playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('My Playlists')} style={styles.button}>
              <Text style={styles.btnText}>My Playlists</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  responsiveBox: {
    width: wp('90%'),
    height: hp('100%'),
  },
  logocontainer: {
    display: 'flex',
    top: -20,
    alignContent: 'center',
    alignItems: 'center',
    width: null,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    display: 'flex',
  },
  playlistcontainer: {
    top: -60,
  },
  logo: {
    flex: 1,
    width: 300,
    height: null,
    resizeMode: 'contain',
    // justifyContent: 'center',
  },
  imgcontainer: {
    display: 'flex',
    top: 50,
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'absolute',
    bottom: 0,
    shadowColor: 'grey',
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ff7300',
    padding: 10,
    width: 150,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 5, // IOS
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    top: 20,
    color: 'rgb(255,115,0)',
  },
  btnText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: 'white',
  },
  playlist: {
    marginTop: 7,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'rgb(255,115,0)',
    marginHorizontal: 10,
  },
  textcontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 65,
    top: -90,
  },
  warningContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'rgb(255,115,0)',
    top: -70,
    height: 100,
    width: 300,
    backgroundColor: 'rgb(245,245,245)',
  },
  warningFont: {
    alignSelf: 'center',
    color: 'rgb(255,115,0)',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});

function mapStateToProps(reduxState) {
  return {
    all: reduxState.playlist.all,
    user: reduxState.auth.user,
    none: reduxState.playlist.none,
  };
}


export default connect(mapStateToProps, { fetchPlaylists, fetchPlaylist, eraseError })(Main);

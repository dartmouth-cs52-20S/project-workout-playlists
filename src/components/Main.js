/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
  TouchableOpacity, Image, ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { fetchPlaylists, fetchPlaylist } from '../actions/index';


class Main extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  goToPlaylist = (ID) => {
    this.props.fetchPlaylist(ID);
    this.props.navigation.navigate('Display');
  }

  render() {
    if (this.props.all.length === 0) {
      return (
        <ActivityIndicator
          style={{ position: 'absolute', top: 350, left: 180 }}
          size="large"
        />
      );
    } else {
      return (
        <View style={styles.container}>
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
                    color: 'rgb(42,42,42)', fontFamily: 'Avenir', fontSize: 17, paddingVertical: 15, paddingHorizontal: 2, margin: 2, backgroundColor: 'orange',
                  }}
                  >
                    {playlist.workoutType}
                    <Text> on </Text>
                    {playlist.createdAt}
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
              <Text style={styles.btnText}>Playlists</Text>
            </TouchableOpacity>
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
  logocontainer: {
    display: 'flex',
    top: -40,
    //position: 'absolute',
    //position: flex-s
    //top: 0,
    alignContent: 'center',
    width: null,
    height: 200,
    resizeMode:"contain",
  },
  title: {
    display: 'flex',
  },
  playlistcontainer: {
    top: -70,
  },
  logo: {
    flex: 1,
    width: 300,
    height: null,
    resizeMode: 'contain',
    //justifyContent: 'center',
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
    //position: 'absolute',
    bottom: 35,
    shadowColor: 'grey',
  },
  // modal: {
  //   position: 'absolute',
  //   top: 180,
  // },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ff7300',
    padding: 10,
    width: 150,
    height: 100,
    borderRadius: 15,
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
    fontFamily: 'Damascus',
    top: 20,
    color: 'rgb(42,42,42)',
  },
  btnText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Damascus',
    color: 'white',
  },
  playlist: {
    backgroundColor: 'orange',
    marginTop: 7,
    borderRadius: 8,
  },
  textcontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 65,
    top: -90,
  },
});

function mapStateToProps(reduxState) {
  return {
    all: reduxState.playlist.all,
  };
}


export default connect(mapStateToProps, { fetchPlaylists, fetchPlaylist })(Main);

/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';


import {
  fetchPlaylist, fetchPlayback, fetchUser, playMedia, pauseMedia, nextMedia,
} from '../actions/index';

class singlePlaylistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uris: '',
      firstPlay: true,
    };
  }

    componentDidMount = () => {
      if (this.props.user.accessToken) {
        this.props.fetchPlayback(this.props.user.accessToken);
      }
      if (typeof this.props.playlist.songs !== 'undefined') {
        this.setUris();
      }
    }


    play = () => {
      if (this.state.firstPlay) {
        console.log(this.state.firstPlay);
        this.props.playMedia(this.props.user.accessToken, { uris: this.state.uris });
        this.setState({ firstPlay: false });
      } else {
        this.props.playMedia(this.props.user.accessToken);
      }
    }

    pause = () => {
      this.props.pauseMedia(this.props.user.accessToken);
    }

    next = () => {
      this.props.nextMedia(this.props.user.accessToken);
    }

    setUris = () => {
      this.setState({ uris: this.getTrackUris() });
    }

    getTrackUris = () => {
      const uris = [];

      // eslint-disable-next-line array-callback-return
      this.props.playlist.songs.map((song) => {
        uris.push(song.uri);
      });

      return uris;
    }


    render() {
      if (typeof this.props.playlist.songs === 'undefined') {
        return (
          <View style={styles.container}><Text>Loading!</Text></View>
        );
      } else if (this.props.playlist.songs.length * 3 < this.props.playlist.workoutLength) {
        return (
          <SafeAreaView style={styles.container}>

            <Text style={styles.bodyText}>
              (!) DISCLAIMER This playlist is shorter than usual due to your ~unique~ music preferences.
              Either hustle the fuck through your workout or be less weird about your music tastes.
            </Text>

            <Text style={styles.titleText}>YOUR TEMPO PLAYLIST</Text>

            <ScrollView style={styles.scrollView} bounces="true" contentContainerStyle={styles.contentContainer}>
              <View>
                {this.props.playlist.songs.map((song) => (
                  <Text style={{
                    color: 'white', fontSize: 17, margin: 5,
                  }}
                  >
                    {song.name}
                  </Text>
                ))}

              </View>
            </ScrollView>
            <View style={{
              display: 'flex', flexDirection: 'row', marginVertical: 5, backgroundColor: 'rgb(255,115,0)', paddingHorizontal: 150, paddingVertical: 0,
            }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={this.play}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>play</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.pause}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>pause</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
      } else {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>YOUR TEMPO PLAYLIST</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.container}>
                <View>
                  {this.props.playlist.songs.map((song) => (
                    <Text style={{
                      color: 'white', fontSize: 17, margin: 5,
                    }}
                    >
                      {song.name}
                    </Text>
                  ))}

                </View>
              </View>
            </ScrollView>
            <View style={{
              display: 'flex', flexDirection: 'row', marginVertical: 5, backgroundColor: 'rgb(255,115,0)', paddingHorizontal: 100, paddingVertical: 0,
            }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={this.play}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>play</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.pause}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>pause</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={this.next}
              >
                <Text style={{
                  color: 'white', fontSize: 17, fontWeight: 'bold',
                }}
                >
                  next
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgb(42,42,42)',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(42,42,42)',
  },
  titleText: {
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 46,
    backgroundColor: 'rgb(255,115,0)',
  },
  bodyText: {
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor: 'rgb(42,42,42)',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: 'rgb(255,115,0)',
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    margin: 5,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    top: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
    playlist: reduxState.playlist.playlist,
    playback: reduxState.player.playback,
  };
}

export default connect(mapStateToProps, {
  fetchPlaylist, fetchPlayback, playMedia, pauseMedia, fetchUser, nextMedia,
})(singlePlaylistView);

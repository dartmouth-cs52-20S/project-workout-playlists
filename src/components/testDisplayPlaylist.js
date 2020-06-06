/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  fetchPlaylist, fetchPlayback, fetchUser, savePlaylist, fetchPlaylists, deletePlaylist,
} from '../actions/index';

class testDisplayPlaylist extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   uris: '',
  //   //   firstPlay: true,
  //   // };
  // }

    componentDidMount = () => {
      if (this.props.user.accessToken) {
        this.props.fetchPlayback(this.props.user.accessToken);
      }
      // if (typeof this.props.playlist.songs !== 'undefined') {
      //   this.setUris();
      // }
      this.props.fetchPlaylists(this.props.user.id);
    }

    handleSave = () => {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.savePlaylist(this.props.user.accessToken, this.props.user.spotifyID, this.props.playlist);
    }

    onDelete = (id) => {
      this.props.deletePlaylist(id);
      this.props.fetchPlaylists(this.props.user.id);
      this.props.navigation.navigate('Main');
    }

    // play = () => {
    //   if (this.state.firstPlay) {
    //     console.log(this.state.firstPlay);
    //     this.props.playMedia(this.props.user.accessToken, { uris: this.state.uris });
    //     this.setState({ firstPlay: false });
    //   } else {
    //     this.props.playMedia(this.props.user.accessToken);
    //   }
    // }

    // pause = () => {
    //   this.props.pauseMedia(this.props.user.accessToken);
    // }

    // next = () => {
    //   this.props.nextMedia(this.props.user.accessToken);
    // }

    // setUris = () => {
    //   this.setState({ uris: this.getTrackUris() });
    // }

    // getTrackUris = () => {
    //   const uris = [];

    //   // eslint-disable-next-line array-callback-return
    //   this.props.playlist.songs.map((song) => {
    //     uris.push(song.uri);
    //   });

    //   return uris;
    // }


    render() {
      console.log(this.props.error);
      if (typeof this.props.playlist.songs === 'undefined') {
        if (this.props.error) {
          return (
            <View style={styles.container}><Text style={styles.bodyText}>We are sorry, but your playlist could not be fetched. Please try again and try to loosen your playlist constraints. </Text></View>
          );
        } else {
          return (
            <View style={styles.container}>
              <ActivityIndicator
                style={{ position: 'absolute', top: 350, left: 180 }}
                size="large"
              />
            </View>
          );
        }
      } else if (this.props.playlist.songs.length * 3 < this.props.playlist.workoutLength) {
        return (
          <SafeAreaView style={styles.container}>

            <Text style={styles.bodyText}>
              (!) DISCLAIMER This playlist is shorter than usual due to your ~unique~ music preferences.
              Either hustle through your workout or make a new playlist and be a little less selective about your music tastes.
            </Text>

            <Text style={styles.titleText}>YOUR TEMPO PLAYLIST</Text>

            <Text style={styles.noteText}>{`${this.props.playlist.workoutType} for ${this.props.playlist.workoutLength} minutes with approximately ${this.props.playlist.averageTempo} bpm`}</Text>

            <ScrollView style={styles.scrollView} bounces="true" contentContainerStyle={styles.contentContainer}>
              <View>
                {this.props.playlist.songs.map((song) => (
                  <Text style={{
                    color: 'white', fontSize: 17, margin: 5,
                  }}
                  >
                    {`${song.name} by ${song.artists[0].name}`}
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
                onPress={this.handleSave}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Save to Spotify</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.onDelete(this.props.playlist.id);
                }}
                style={styles.button}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Delete playlist</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
      } else {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>YOUR TEMPO PLAYLIST</Text>
            <Text style={styles.noteText}>{`${this.props.playlist.workoutType} for ${this.props.playlist.workoutLength} minutes with approximately ${this.props.playlist.averageTempo} bpm.`}</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.container}>
                <View>
                  {this.props.playlist.songs.map((song) => (
                    <Text style={{
                      color: 'white', fontSize: 17, margin: 10,
                    }}
                    >
                      {`${song.name} by ${song.artists[0].name}`}
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
                onPress={this.handleSave}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Save to Spotify</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.onDelete(this.props.playlist.id);
                }}
                style={styles.button}
              >
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Delete playlist</Text>
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
  noteText: {
    flexDirection: 'row',
    fontSize: 20,
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 46,
    marginTop: 20,
    marginBottom: 15,
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
    error: reduxState.playlist.playlist,
  };
}

export default connect(mapStateToProps, {
  fetchPlaylist, fetchPlayback, savePlaylist, fetchUser, fetchPlaylists, deletePlaylist,
})(testDisplayPlaylist);

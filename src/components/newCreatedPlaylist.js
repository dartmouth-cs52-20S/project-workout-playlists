/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, TextInput,
} from 'react-native';

import { connect } from 'react-redux';


import {
  fetchPlaylist, fetchUser, savePlaylist, fetchPlaylists, deletePlaylist, updatePlaylist,
} from '../actions/index';

class newCreatedPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      playlistName: this.props.playlist.playlistName,
    };
  }

    componentDidMount = () => {
      this.props.fetchPlaylists(this.props.user.id);
    }

    handleSave = () => {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.savePlaylist(this.props.user.accessToken, this.props.user.spotifyID, this.props.playlist);
    }

    onDelete = (id) => {
      this.props.deletePlaylist(id);
      setTimeout(() => {
        this.props.fetchPlaylists(this.props.user.id);
      }, 2000);
      setTimeout(() => {
        this.props.navigation.navigate('Main');
      }, 2000);
    }


    editTitle = (event) => {
      this.setState({ isEditing: true });
    }

    notEditing = (event) => {
      this.setState({ isEditing: false });
      this.props.updatePlaylist(this.props.playlist.id, { playlistName: this.state.playlistName });
      this.props.fetchPlaylists(this.props.user.id);
    }

    render() {
      let editInputOrButton = null;
      if (this.state.isEditing === true) {
        editInputOrButton = (
          <View style={{ backgroundColor: 'rgb(255,115,0)', paddingHorizontal: 100 }}>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{
                  height: 40, borderColor: 'white', borderWidth: 1, width: 300,
                }}
                onChangeText={(text) => { if (text !== '') { this.setState({ playlistName: text }); } }}
                placeholder={this.props.playlist.playlistName}
              />
              <TouchableOpacity onPress={() => { this.notEditing(); }} style={styles.button}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      } else {
        editInputOrButton = (
          <View style={{
            backgroundColor: 'rgb(255,115,0)', width: 415, paddingTop: 5, paddingHorizontal: 40,
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{
                color: 'white', fontFamily: 'Avenir', fontSize: 27, fontWeight: 'bold',
              }}
              >
                {this.props.playlist.playlistName}
              </Text>
              <TouchableOpacity onPress={() => { this.editTitle(); }} style={styles.button}>
                <Text style={{ color: 'white' }}>EDIT</Text>
              </TouchableOpacity>
              {/* MAKE EDITABLE!!! */}
            </View>
          </View>
        );
      }


      if (this.props.error) {
        return (
          <View style={styles.container}><Text style={styles.bodyText}>We are sorry, but your playlist could not be fetched. Please try again and try to loosen your playlist constraints. </Text></View>
        );
      } else if (typeof this.props.playlist.songs === 'undefined') {
        return (
          <View style={styles.container}>
            <ActivityIndicator
              style={{ position: 'absolute', top: 350, left: 180 }}
              size="large"
            />
          </View>
        );
      } else if (this.props.playlist.songs.length * 3 < this.props.playlist.workoutLength) {
        return (
          <SafeAreaView style={styles.container}>

            <Text style={styles.bodyText}>
              (!) DISCLAIMER This playlist is shorter than usual due to your ~unique~ music preferences.
              Either hustle through your workout or make a new playlist and be a little less selective about your music tastes.
            </Text>

            {editInputOrButton}

            <Text
              style={styles.noteText}
            >
              {` A ${this.props.playlist.workoutLength} minute ${this.props.playlist.workoutType} workout at ~ ${this.props.playlist.averageTempo} BPM.`}
            </Text>

            <ScrollView style={styles.scrollView} bounces="true" contentContainerStyle={styles.contentContainer}>
              <View>
                {this.props.playlist.songs.map((song) => (
                  <Text style={{
                    color: 'white', fontFamily: 'Avenir', fontSize: 17, margin: 5,
                  }}
                  >
                    {`${song.name} by ${song.artists[0].name}`}
                  </Text>
                ))}

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
                <Text style={{
                  color: 'white', fontFamily: 'Avenir', fontSize: 17, fontWeight: 'bold',
                }}
                >
                  Save to Spotify
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.onDelete(this.props.playlist.id);
                }}
                style={styles.button}
              >
                <Text style={{
                  color: 'white', fontFamily: 'Avenir', fontSize: 17, fontWeight: 'bold',
                }}
                >
                  Delete playlist
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
      } else {
        return (
          <SafeAreaView style={styles.container}>
            {editInputOrButton}
            <Text style={styles.noteText}>{` A ${this.props.playlist.workoutLength} minute ${this.props.playlist.workoutType} workout at ~ ${this.props.playlist.averageTempo} BPM.`}</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.container}>
                <View>
                  {this.props.playlist.songs.map((song) => (
                    <Text style={{
                      color: 'white', fontFamily: 'Avenir', fontSize: 17, margin: 10,
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
                <Text style={{
                  color: 'white', fontFamily: 'Avenir', fontSize: 17, fontWeight: 'bold',
                }}
                >
                  Save to Spotify
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.onDelete(this.props.playlist.id);
                }}
                style={styles.button}
              >
                <Text style={{
                  color: 'white', fontFamily: 'Avenir', fontSize: 17, fontWeight: 'bold',
                }}
                >
                  Delete playlist
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
  noteText: {
    flexDirection: 'row',
    fontSize: 18,
    color: 'white',
    fontFamily: 'Avenir',
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 40,
    width: 420,
    backgroundColor: 'rgb(255,115,0)',
    justifyContent: 'center',
  },
  bodyText: {
    color: 'white',
    fontFamily: 'Avenir',
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
    error: reduxState.playlist.error,
  };
}

export default connect(mapStateToProps, {
  fetchPlaylist, savePlaylist, fetchUser, fetchPlaylists, deletePlaylist, updatePlaylist,
})(newCreatedPlaylist);

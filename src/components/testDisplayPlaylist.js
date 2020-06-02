/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Button,
} from 'react-native';

import { connect } from 'react-redux';


import {
  fetchPlayback, fetchUser, playMedia, pauseMedia,
} from '../actions/index';

class testDisplayPlaylist extends Component {
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
        console.log(this.state.uris);
        this.props.playMedia(this.props.user.accessToken, this.state.uris);
        this.setState({ firstPlay: false });
      } else {
        this.props.playMedia(this.props.user.accessToken);
      }
    }

    pause = () => {
      console.log(this.props.user.accessToken);
      this.props.pauseMedia(this.props.user.accessToken);
    }

    setUris = () => {
      this.setState({ uris: this.getTrackUris() });
    }

    getTrackUris = () => {
      const uris = [];

      // eslint-disable-next-line array-callback-return
      this.props.playlist.songs.map((song) => {
        console.log(song);
        uris.push(song.uri);
      });
      return uris;
    }


    render() {
      if (typeof this.props.playlist.songs === 'undefined') {
        return (
          <View style={styles.container}><Text>Sorry, playlist hasnt been created</Text></View>
        );
      } else {
        return (
          <View style={styles.container}>
            {this.props.playlist.songs.map((song) => (<Text>{song.name}</Text>))}
            <Button onPress={this.play} title="play" />
            <Button onPress={this.pause} title="pause" />
          </View>
        );
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user.user,
    playlist: reduxState.playlist.playlist,
    playback: reduxState.player.playback,
  };
}

export default connect(mapStateToProps, {
  fetchPlayback, playMedia, pauseMedia, fetchUser,
})(testDisplayPlaylist);

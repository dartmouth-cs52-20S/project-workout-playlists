import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { AirbnbRating } from 'react-native-ratings';
import { savePlaylist, fetchUser } from '../actions';

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }

  handleSave = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.savePlaylist(this.props.user.accessToken, this.props.user.spotifyID, this.props.playlist);
  }


  render() {
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.rating);
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Rate this Playlist</Text>
        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great!']}
          defaultRating={5}
          size={40}
          selectedColor="orange"
          reviewColor="orange"
          onFinishRating={(stars) => this.setState({ rating: stars })}
        />
        <TouchableOpacity onPress={this.handleSave}>
          <Text>Save playlist to spotify account</Text>
        </TouchableOpacity>
      </View>
    //   <View style={styles.container}>
    //     <Text>My Playlists</Text>
    //   </View>
    );
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
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
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
  savePlaylist, fetchUser,
})(Feedback);

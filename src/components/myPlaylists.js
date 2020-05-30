import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';

class MyPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // favorited: 0,
    };
  }

  // displayPlaylist = () => {
  //   if (this.state.favorited === 1)
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>My Playlists</Text>
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
});

export default MyPlaylists;

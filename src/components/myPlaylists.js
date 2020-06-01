/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import { connect } from 'react-redux';

import { fetchPlaylists } from '../actions/index';


class MyPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // favorited: 0,
    };
  }

  componentDidMount() {
    this.props.fetchPlaylists();
    console.log('mounted in playlist');
  }

  // displayPlaylist = () => {
  //   if (this.state.favorited === 1)
  // }

  render() {
    console.log(this.props.all);
    const display = this.props.all.map((playlist) => {
      return (
        <View style={styles.container}>
          <Text>{playlist.id}</Text>
        </View>
      );
    });
    return display;
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

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user.user,
    all: reduxState.playlist.all,
  };
}

export default connect(mapStateToProps, { fetchPlaylists })(MyPlaylists);

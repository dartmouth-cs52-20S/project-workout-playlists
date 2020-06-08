/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist, eraseError } from '../actions/index';


class MyPlaylists extends Component {
  goToPlaylist = (id) => {
    this.props.eraseError();
    this.props.fetchPlaylist(id);
    this.props.navigation.navigate('Display Selected');
  }


  render() {
    if (this.props.none) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={{ width: 450, backgroundColor: 'rgb(255,115,0)', alignItems: 'center' }}>
            <Text style={styles.titleText}>MY PLAYLISTS</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <Text style={{
                color: 'white', fontFamily: 'Avenir', fontSize: 17, paddingVertical: 15, paddingHorizontal: 2, margin: 2, backgroundColor: 'rgb(42,42,42)',
              }}
              >
                Looks like you haven't created any playlists yet!
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={{ width: 450, backgroundColor: 'rgb(255,115,0)', alignItems: 'center' }}>
            <Text style={styles.titleText}>MY PLAYLISTS</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              {this.props.all.map((playlist) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.goToPlaylist(playlist.id);
                    }}
                  >
                    <Text style={{
                      color: 'white', fontFamily: 'Avenir', fontSize: 17, paddingVertical: 15, paddingHorizontal: 2, margin: 2, backgroundColor: 'rgb(42,42,42)',
                    }}
                    >
                      {playlist.playlistName}
                      {' '}
                      Tempo
                      {' '}
                      {playlist.workoutType}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}

            </View>
          </ScrollView>
        </SafeAreaView>
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
    backgroundColor: 'rgb(42,42,42)',
    marginTop: 10,
  },
  titleText: {
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 15,
    fontFamily: 'Avenir',
  },
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor: 'rgb(42,42,42)',
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
    all: reduxState.playlist.all,
    none: reduxState.playlist.none,
  };
}

export default connect(mapStateToProps, { fetchPlaylists, fetchPlaylist, eraseError })(MyPlaylists);

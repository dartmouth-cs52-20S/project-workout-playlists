/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Button,
} from 'react-native';

import { connect } from 'react-redux';

import { fetchPlaylists, fetchPlaylist, deletePlaylist } from '../actions/index';


class MyPlaylists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // favorited: 0,
    };
  }

  componentDidMount() {
    console.log('mounted in my playlists');
    // this.props.fetchPlaylists();
  }

  // displayPlaylist = () => {
  //   if (this.state.favorited === 1)
  // }

  goToPlaylist = (id) => {
    this.props.fetchPlaylist(id);
    this.props.navigation.navigate('Display');
  }

  onDelete = (id) => {
    this.props.deletePlaylist(id);
    this.props.fetchPlaylists(this.props.user.id);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>MY PLAYLISTS</Text>
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
                    color: 'white', fontSize: 17, paddingVertical: 15, paddingHorizontal: 2, margin: 2, backgroundColor: 'rgb(42,42,42)',
                  }}
                  >
                    Tempo
                    {playlist.workoutType}
                    {playlist.createdAt}
                  </Text>
                  <Button
                    title="delete"
                    onPress={() => {
                      this.onDelete(playlist.id);
                    }}
                    style={styles.button}
                    icon={(
                      <Icon
                        name="times"
                        size={15}
                        color="orange"
                      />
)}
                  />
                </TouchableOpacity>
              </View>
            ))}

          </View>
        </ScrollView>
      </SafeAreaView>

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
    backgroundColor: 'rgb(42,42,42)',
    marginTop: 10,
  },
  titleText: {
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 100,
    backgroundColor: 'rgb(255,115,0)',
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
  };
}

export default connect(mapStateToProps, { fetchPlaylists, fetchPlaylist, deletePlaylist })(MyPlaylists);

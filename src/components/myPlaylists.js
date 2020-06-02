/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity,
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
  }

  // displayPlaylist = () => {
  //   if (this.state.favorited === 1)
  // }

  render() {
    console.log(this.props.all);
    // const display = this.props.all.map((playlist) => {
    //   return (
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.titleText}>YOUR TEMPO PLAYLISTS</Text>
    //   <ScrollView style={styles.scrollView}>
    //     <View style={styles.container}>
    //       <Text>
    //         {playlist.workoutType}
    //         {playlist.createdAt}
    //       </Text>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    //   );
    // });
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>MY PLAYLISTS</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {this.props.all.map((playlist) => (
              <View>
                <TouchableOpacity>
                  <Text style={{
                    color: 'white', fontSize: 17, paddingVertical: 15, paddingHorizontal: 2, margin: 2, backgroundColor: 'black',
                  }}
                  >
                    Tempo
                    {playlist.workoutType}
                    {playlist.createdAt}
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

export default connect(mapStateToProps, { fetchPlaylists })(MyPlaylists);

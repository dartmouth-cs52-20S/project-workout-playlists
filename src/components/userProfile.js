/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import { connect } from 'react-redux';


import { fetchUser } from '../actions/index';

class UserProfile extends Component {
  componentDidMount = () => {
    this.props.fetchUser(this.props.user.spotifyID);
    console.log('mounted');
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          Acousticness: {this.props.user.acousticness}
        </Text>
        <Text>
          Instrumentalness: {this.props.user.instrumentalness}
        </Text>
        <Text>
          Liveness: {this.props.user.liveness}
        </Text>
        <Text>
          Loudness: {this.props.user.loudness}
        </Text>
        <Text>
          Popularity: {this.props.user.popularity}
        </Text>
        <Text>
          Positivity: {this.props.user.valence}
        </Text>
        <Text>
          Fav genres: {this.props.user.genres}
        </Text>
      </View>
    );
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
  };
}

export default connect(mapStateToProps, { fetchUser })(UserProfile);

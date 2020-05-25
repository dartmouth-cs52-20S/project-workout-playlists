import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

import { fetchUser } from '../actions/index';


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      spotifyID: '',
      password: '',
      genres: [],
      acousticness: false,
      instrumentalness: false,
      liveness: false,
      loudness: false,
      popularity: false,
      valence: false,
    };
  }

  componentDidMount = () => {
    // this.props.fetchUser(this.props.match.params.spotifyID);
    console.log('mounted');
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          My Profile
        </Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.imgur.com/jDLSTki.png' }}
        />
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

export default UserProfile;

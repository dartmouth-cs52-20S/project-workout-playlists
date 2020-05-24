import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

class UserProfile extends Component {
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

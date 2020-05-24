import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

class NewCreatedPlaylist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Have Fun!!
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 500,
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

export default NewCreatedPlaylist;

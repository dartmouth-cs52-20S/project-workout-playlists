import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.macworld.co.uk/cmsdata/slideshow/3598175/Dashboard_thumb800.PNG' }}
        />
        <Text>
          Here is the main page of our app!!
        </Text>
        <div>
          <button type="button"> Add New Playlist</button>
          <button type="button"> Use Previous Playlist</button>
        </div>
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
    width: 400,
    height: 300,
  },
});

export default Main;

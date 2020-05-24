import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
  TouchableOpacity,
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
        {/* <TouchableOpacity
          onPress={null}
        > */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('New workout')} style={styles.button}>
          <Text>Start new workout</Text>
        </TouchableOpacity>
        {/* needs onPress function */}
        <TouchableOpacity style={styles.button}>
          <Text>Use Previous Playlist</Text>
        </TouchableOpacity>
        {/* </TouchableOpacity> */}
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
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

export default Main;

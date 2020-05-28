/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
  TouchableOpacity,
} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>
            Here is the main page of our app!!
          </Text>
        </View>
        <View style={styles.body} />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('New workout')} style={styles.button}>
            <Text>Start new workout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Use Previous Playlist</Text>
          </TouchableOpacity>
        </View>
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
  imagecontainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 100,
    height: 10,
  },
  image: {
    // flex: 1,
    // width: null,
    // height: null,
    resizeMode: 'contain',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 5,
    height: 100,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default Main;

/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
  TouchableOpacity, Image,
} from 'react-native';


class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('../imgs/logo3.png')} />
        </View>
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={require('../imgs/healthkit.png')} />
        </View>
        <View style={styles.body} />
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Workout Selector')} style={styles.button}>
            <Text style={styles.text}>New Workout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('My Playlists')} style={styles.button}>
            <Text style={styles.text}>Playlists</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: 'white',
  },
  logocontainer: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    width: 420,
    height: 180,
  },
  title: {
    display: 'flex',
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  imgcontainer: {
    display: 'flex',
    top: 50,
    justifyContent: 'center',
    width: 420,
    height: 400,
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 80,
    shadowColor: 'grey',
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 5,
    width: 150,
    height: 150,
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 5, // IOS
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

export default Main;

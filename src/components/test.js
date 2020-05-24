import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, Button, navigation
  // TouchableOpacity,
} from 'react-native';


function testTab({navigation}) {

  // onInputChangeEmail = (event) => {
  //   this.setState({ email: event.target.value });
  //   // console.log(event.target.value);
  // }

  // onInputChangeUsername = (event) => {
  //   this.setState({ username: event.target.value });
  //   // console.log(event.target.value);
  // }

  // onInputChangePassword = (event) => {
  //   this.setState({ password: event.target.value });
  //   // console.log(event.target.value);
  // }

    return (
      <View style={styles.container}>
        <Text> Sign Up Here!</Text>
        <View>
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Email" value="hello" />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Username" value="hello" />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Password" value="hello" />

          {/* <TouchableOpacity style={styles.button}>
            <Text>Sign Up</Text>
          </TouchableOpacity> */}
          <Button
            // onPress={onPressLearnMore}
            title="Sign up"
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
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

export default testTab;

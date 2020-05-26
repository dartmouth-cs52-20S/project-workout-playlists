import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button,
  TouchableOpacity, Image,
} from 'react-native';

class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyID: '',
      password: '',
    };
  }

  onInputChangeUsername = (event) => {
    this.setState({ spotifyID: event.target.value });
    // console.log(event.target.value);
  }

  onInputChangePassword = (event) => {
    this.setState({ password: event.target.value });
    // console.log(event.target.value);
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('../imgs/logo.png')} />
        </View>
        <View>
          <TextInput style={styles.input} placeholder="spotify ID" placeholderTextColor="black" onChange={this.onInputChangeUsername} value={this.state.spotifyID} />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="black" onChange={this.onInputChangePassword} value={this.state.password} />

          <Button
            title="Sign in"
            onPress={() => this.props.navigation.navigate('Main')}
          />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign up')}> 
            <Text>Don't have an account? Sign up here!</Text>
        </TouchableOpacity>   
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
  logocontainer:{
    display: 'flex',
    justifyContent: 'center',
    width: 350,
    height: 200,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'orange',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default signIn;

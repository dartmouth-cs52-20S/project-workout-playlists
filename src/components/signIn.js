import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button,
  TouchableOpacity,
} from 'react-native';

class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onInputChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    // console.log(event.target.value);
  }

  onInputChangePassword = (event) => {
    this.setState({ password: event.target.value });
    // console.log(event.target.value);
  }



  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Sign In Here:</Text>
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Email" value={this.state.email} />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Password" value={this.state.password} />

          <Button
            title="Sign up"
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
  },
  image: {
    width: 400,
    height: 300,
  },
  button: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
  },
});

export default signIn;

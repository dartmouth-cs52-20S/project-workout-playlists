import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput,
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


  // makeUser = () => {
  //   const newUser = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
  //   this.props.signinUser(newUser, this.props.history);
  // }
  // onChange={this.onInputChangeEmail}

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Sign In Here:</Text>
          {/* <TouchableOpacity
            onPress={null}
          > */}
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Email" value="hello" />
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Password" value="hello" />

          <TouchableOpacity style={styles.button}>
            <Text>Sign In</Text>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
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

export default signIn;

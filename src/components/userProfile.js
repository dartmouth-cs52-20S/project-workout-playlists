import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import { connect } from 'react-redux';


import { fetchUser } from '../actions/index';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount = () => {
    console.log(this.props.user.spotifyID)
    this.props.fetchUser(this.props.user.spotifyID);
    console.log('mounted');
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.user.spotifyID}
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



function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, { fetchUser })(UserProfile);

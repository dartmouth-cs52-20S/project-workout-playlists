/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { AirbnbRating } from 'react-native-ratings';
import { fetchUser } from '../actions';

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Rate this Playlist:</Text>
        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great!']}
          defaultRating={5}
          size={40}
          selectedColor="orange"
          reviewColor="rgb(255,115,0)"
          onFinishRating={(stars) => this.setState({ rating: stars })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'rgb(255,115,0)',
    margin: 15,
    padding: 5,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(255,115,0)',
    fontFamily: 'Avenir',
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, {
  fetchUser,
})(Feedback);

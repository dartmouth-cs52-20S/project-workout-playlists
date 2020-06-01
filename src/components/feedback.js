import React, { Component } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }


  render() {
    console.log(this.state.rating);
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Rate this Playlist</Text>
        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great!']}
          defaultRating={5}
          size={40}
          selectedColor="orange"
          reviewColor="orange"
          onFinishRating={(stars) => this.setState({ rating: stars })}
        />

      </View>
    //   <View style={styles.container}>
    //     <Text>My Playlists</Text>
    //   </View>
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
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default Feedback;

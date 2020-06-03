/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import { updateUser, fetchUser } from '../actions/index';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: this.props.user.acousticness,
      question2: this.props.user.instrumentalness,
      question3: this.props.user.liveness,
      question4: this.props.user.loudness,
      question5: this.props.user.popularity,
      question6: this.props.user.valence,
      question7: this.props.user.genres,
    };
  }

  componentDidMount = () => {
    this.props.fetchUser(this.props.user.spotifyID);
    console.log('mounted');
  }

  handleClick = (event) => {
    console.log('updating preferences in profile for');
    console.log(this.props.user.spotifyID);
    this.props.updateUser(
      {
        spotifyID: this.props.user.spotifyID,
        acousticness: this.state.question1,
        instrumentalness: this.state.question2,
        liveness: this.state.question3,
        loudness: this.state.question4,
        popularity: this.state.question5,
        valence: this.state.question6,
        genres: this.props.user.genres,
      },
    );
    this.props.navigation.navigate('Main');
    // this.props.userExists();
  }

  // aborted genre because this depends on playlists and it will build up to be too much!
  // genreChecker = (props) = {
  //   if (question7 === 0) {
  //     return <Text>You don't have any </Text>
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>


        <Text style={{
          color: 'black',
          fontSize: 20,
        }}
        >
          Current User Settings for
          {' '}
          {this.props.user.spotifyID}
          {':'}

        </Text>


        {/* THIS IS A TEMPORARY SPACER */}
        <Text>
          {' '}
        </Text>


        <View>
          <Text>
            Acousticness:
            {' '}
            {Math.round(this.state.question1 * 10, 2)}
            {'/10'}
          </Text>
          <Slider
            style={styles.slider}

            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            value={this.state.question1}
            onValueChange={(question1) => this.setState({ question1 })}
          />

        </View>

        <View>
          <Text>
            Instrumentalness:
            {' '}
            {Math.round(this.state.question2 * 10, 2)}
            {'/10'}
          </Text>
          <Slider
            style={styles.slider}

            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            value={this.state.question2}
            onValueChange={(question2) => this.setState({ question2 })}
          />

        </View>

        <View>
          <Text>
            Liveness:
            {' '}
            {Math.round(this.state.question3 * 10, 2)}
            {'/10'}
          </Text>
          <Slider
            style={styles.slider}

            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            value={this.state.question3}
            onValueChange={(question3) => this.setState({ question3 })}
          />

        </View>

        <View>
          <Text>
            Loudness:
            {' '}
            {Math.round(this.state.question4 * 10, 2)}
            {'/10'}
          </Text>
          <Slider
            style={styles.slider}

            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            value={this.state.question4}
            onValueChange={(question4) => this.setState({ question4 })}
          />

        </View>

        <View>
          <Text>
            Popularity:
            {' '}
            {Math.round(this.state.question5 * 10, 2)}
            {'/10'}
          </Text>
          <Slider
            style={styles.slider}

            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            value={this.state.question5}
            onValueChange={(question5) => this.setState({ question5 })}
          />

        </View>

        <View>
          <Text>
            Positivity:
            {' '}
            {Math.round(this.state.question6 * 10, 2)}
            {'/10'}
          </Text>
          <Slider
            style={styles.slider}

            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            value={this.state.question6}
            onValueChange={(question6) => this.setState({ question6 })}
          />
        </View>

        {/* aborted genre question, here just in case */}
        {/* <View>
          <Text>
            Recently used genres:
            {' '}
            {this.props.user.genres}
          </Text>
        </View> */}


        {/* THIS IS A TEMPORARY SPACER */}
        <Text>
          {' '}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleClick();
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Save Changes</Text>
        </TouchableOpacity>

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
  slider: {
    width: 300,
    height: 30,
    borderRadius: 50,
  },
  button: {
    backgroundColor: 'rgb(255,115,0)',
    padding: 5,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, { fetchUser, updateUser })(UserProfile);

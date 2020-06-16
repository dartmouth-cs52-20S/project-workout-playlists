/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView,
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
      // question7: this.props.user.genres,
    };
  }

  componentDidMount = () => {
    this.props.fetchUser(this.props.user.spotifyID);
  }

  handleClick = (event) => {
    this.props.updateUser(
      {
        accessToken: this.props.user.accessToken,
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.genreTitleText}>
            Current User Settings for
            {' '}
            {this.props.user.spotifyID}
            {':'}

          </Text>


          <Text>
            {' '}
          </Text>
          <View style={{ alignItems: 'center' }}>

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

            <Text>
              {' '}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.handleClick();
              }}
            >

              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Save Changes</Text>
              </View>
            </TouchableOpacity>
          </View>
          <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'rgb(255,115,0)', marginVertical: 20 }}>
              <Text style={styles.genreTitleText}>YOUR TOP GENRES</Text>
              <Text style={styles.noteText}>These are the top genres of your most listened to artists.</Text>
            </View>
            <ScrollView style={styles.scrollView}>
              <View style={styles.container}>
                <View>
                  {this.props.user.genres.map((genre) => (
                    <Text style={{
                      color: 'black', fontSize: 17, margin: 10,
                    }}
                    >
                      {genre}
                    </Text>
                  ))}

                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ScrollView>
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
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
    width: 150,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
  },
  genreTitleText: {
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 46,
    backgroundColor: 'rgb(255,115,0)',
  },
  noteText: {
    flexDirection: 'row',
    fontSize: 15,
    color: 'white',
    paddingBottom: 10,
    paddingHorizontal: 46,
    backgroundColor: 'rgb(255,115,0)',
  },
});

function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, { fetchUser, updateUser })(UserProfile);

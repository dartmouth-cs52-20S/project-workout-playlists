/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View,
  Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import { updateUser, userExists } from '../actions/index';

const NUM_QUESTIONS = 6;

class NewUserFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 0,
      question1: 0.5,
      question2: 0.5,
      question3: 0.5,
      question4: 0.5,
      question5: 0.5,
      question6: 0.5,
      question7: 0.5,
    };
  }

  onInputChangeText = (event) => {
    this.setState({ question7: event.target.value });
  }

  handleClick = (event) => {
    if (this.state.currentQ < NUM_QUESTIONS) {
      const questionNum = {
        // eslint-disable-next-line react/no-access-state-in-setstate
        currentQ: this.state.currentQ,
      };
      questionNum.currentQ += 1;
      this.setState({ currentQ: questionNum.currentQ });
      // this.state.currentQ += 1;
    } else {
      this.props.updateUser(
        {
          spotifyID: this.props.user.spotifyID,
          accessToken: this.props.user.accessToken,
          acousticness: this.state.question1,
          instrumentalness: this.state.question2,
          liveness: this.state.question3,
          loudness: this.state.question4,
          popularity: this.state.question5,
          valence: this.state.question6,
          genres: this.state.question7,
        },
      );
      this.props.userExists();
      this.props.navigation.navigate('Main');
    }
  }

  renderQuestion= () => {
    const questionNum = this.state.currentQ;
    if (questionNum === 0) {
      return (
        <View style={styles.first}>
          <Text style={styles.intro}>
            Let's get to know you...
          </Text>
          <Text style={styles.subtitle}>
            Time to enter some user preferences! Don't worry, these can all be changed in settings later.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text style={styles.buttonTxt}>Get started</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 1) {
      return (
        <View>

          <Text style={styles.label}>
            Acousticness:
            {' '}
            {Math.round(this.state.question1 * 10, 2)}

          </Text>
          <Slider

            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            value={this.state.question1}
            onValueChange={(question1) => this.setState({ question1 })}
          />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>1- Not Acoustic</Text>
            <Text>10- Very Acoustic</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text style={styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 2) {
      return (
        <View>

          <Text style={styles.label}>
            Instrumentalness:
            {' '}
            {Math.round(this.state.question2 * 10, 2)}

          </Text>
          <Slider

            value={this.state.question2}
            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            onValueChange={(question2) => this.setState({ question2 })}
          />

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>1- Not Instrumental</Text>
            <Text>10- Very Instrumental</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text style={styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 3) {
      return (
        <View>
          <Text style={styles.label}>
            Liveness:
            {' '}
            {Math.round(this.state.question3 * 10, 2)}

          </Text>
          <Slider

            value={this.state.question3}
            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            onValueChange={(question3) => this.setState({ question3 })}
          />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>1- All Studio</Text>
            <Text>10- At the Concert</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text style={styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 4) {
      return (
        <View>

          <Text style={styles.label}>
            Loudness:
            {' '}
            {Math.round(this.state.question4 * 10, 2)}

          </Text>
          <Slider

            value={this.state.question4}
            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            onValueChange={(question4) => this.setState({ question4 })}
          />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>1- quiet</Text>
            <Text>10-LOUD</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text style={styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 5) {
      return (
        <View>

          <Text style={styles.label}>
            Popular music:
            {' '}
            {Math.round(this.state.question5 * 10, 2)}

          </Text>
          <Slider

            value={this.state.question5}
            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            onValueChange={(question5) => this.setState({ question5 })}
          />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>1- niche music only</Text>
            <Text>10-top hits please</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text style={styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 6) {
      return (
        <View>

          <Text style={styles.label}>
            Positivity:
            {' '}
            {Math.round(this.state.question6 * 10, 2)}

          </Text>
          <Slider

            value={this.state.question6}
            minimumTrackTintColor="#FF7300"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="orange"
            onValueChange={(question6) => this.setState({ question6 })}
          />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>1- meh</Text>
            <Text>10- Happy vibes!</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text style={styles.buttonTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Text>
          Thank You
        </Text>
      );
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Lets get to know you!</Text>
        {/* <br /> */}
        {this.renderQuestion()}
        <Text style={styles.break}>Hi</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  first: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Avenir',
    top: -20,
  },
  subtitle: {
    top: -20,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(165,165,165)',
    fontSize: 17,
    fontFamily: 'Avenir',
  },
  intro: {
    alignSelf: 'center',
    color: '#FF7300',
    fontSize: 36,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'flex-start',
    top: -50,
  },
  title: {
    color: 'orange',
    fontSize: 25,
    justifyContent: 'flex-start',
  },
  break: {
    fontSize: 40,
    color: 'rgba(0,0,0,0)',
  },
  image: {
    width: 400,
    height: 300,
  },
  slider: {
    width: 300,
    height: 30,
    borderRadius: 50,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 32,
    backgroundColor: 'rgb(255,115,0)',
    margin: 10,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    padding: 3,
  },
  buttonTxt: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});


function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, { updateUser, userExists })(NewUserFlow);

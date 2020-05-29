/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View,
  Text, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import { updateUser } from '../actions/index';

const NUM_QUESTIONS = 7;

class NewUserFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 1,
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      question5: 0,
      question6: 0,
      question7: '',
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
      console.log('calling update in new user flow');
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
          genres: this.state.question7,
        },
      );
      this.props.navigation.navigate('Main');
    }
  }

  renderQuestion= () => {
    const questionNum = this.state.currentQ;
    if (questionNum === 1) {
      return (
        <View>
          <Text>
            Acousticness
          </Text>
          <Slider
            minimumTrackTintColor="orange"
            maximumTrackTintColor="#000000"
            value={.5}
            onValueChange={(question1) => this.setState({ question1 })}
          />
          <Text>1- Not Acoustic                   10- Very Acoustic</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 2) {
      return (
        <View>
          <Text>
            Instrumentalness
          </Text>
          <Slider
            value={.5}
            // style={styles.slider}
            onValueChange={(question2) => this.setState({ question2 })}
          />
          <Text>1- Not Instrumental                   10- Very Instrumental</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 3) {
      return (
        <View>
          <Text>
            Liveness
          </Text>
          <Slider
            value={.5}
            // style={styles.slider}
            onValueChange={(question3) => this.setState({ question3 })}
          />
          <Text>1- All Studio                   10- At the Concert</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 4) {
      return (
        <View>
          <Text>
            Loudness
          </Text>
          <Slider
            value={.5}
            // style={styles.slider}
            onValueChange={(question4) => this.setState({ question4 })}
          />
          <Text>1- quiet                            10-LOUD</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 5) {
      return (
        <View>
          <Text>
            Popular music
          </Text>
          <Slider
            value={.5}
            // style={styles.slider}
            onValueChange={(question5) => this.setState({ question5 })}
          />
          <Text>1- niche music only                            10-top hits please</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 6) {
      return (
        <View>
          <Text>
            Positivity
          </Text>
          <Slider
            value={.5}
            // style={styles.slider}
            // value={this.state.question1}
            onValueChange={(question6) => this.setState({ question6 })}
          />
          <Text>1- meh                         10- Happy vibes!</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 7) {
      return (
        <View>
          <Text>
            Favorite genres while working out? (separate by commas!)
          </Text>
          <TextInput
            style={{ height: 25, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Rap, electric"
            // onChange={this.onInputChangeText}
            onChangeText={(question7) => this.setState({question7})}
            value={this.state.question7}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>Next</Text>
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
        <Text h1>Let's get to know you!</Text>
        {/* <br /> */}
        {this.renderQuestion()}
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
    width: 400,
    height: 300,
  },
  slider: {
    width: 300, 
    height: 30, 
    borderRadius: 50,
  },
  button:
  {
    display: 'flex',
    alignItems: 'center',
    width: 200,
    height: 32,
    backgroundColor: 'orange',
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});


function mapStateToProps(reduxState) {
  return {
    user: reduxState.user.user,
  };
}

export default connect(mapStateToProps, { updateUser })(NewUserFlow);

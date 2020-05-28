import React, { Component } from 'react';
import {
  StyleSheet, View,
  Text, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import { fetchUser, updateUser } from '../actions/index';

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
      question7: 'rap, electric',
    };
  }

  componentDidMount() {
    // console.log('in newUserFlow');
    this.props.fetchUser(this.props.user.spotifyID);
  }

  onInputChangeText = (event) => {
    this.setState({ question7: event.target.value });
  }

  handleClick = (event) => {
    console.log('handled');
    if (this.state.currentQ <= NUM_QUESTIONS) {
      const questionNum = {
        currentQ: this.state.currentQ,
      };
      questionNum.currentQ += 1;
      this.setState({ currentQ: questionNum.currentQ });
      console.log(questionNum);
      // this.state.currentQ += 1;
    } else {
      this.props.updateUser(this.props.user.spotifyID, { //lol backend in progress
        acousticness: this.state.question1, 
        instrumentalness: this.state.question2, 
        liveness: this.state.question3, 
        loudness: this.state.question4, 
        popularity: this.state.question5, 
        valence: this.state.question6, 
        genres: this.state.question7
      })
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
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
              this.setState({ question1: 1 });
            }}
          >
            <Text>1-Dababy</Text>
          </TouchableOpacity> */}
          <Slider
            // style={styles.slider}
            // value={this.state.question1}
            onValueChange={(question1) => this.setState({ question1 })}
          />
          {/* <Text>
            Value:
            {' '}
            {this.state.question1}
          </Text> */}
          <Text>1- Not Acoustic                   10- Very Acoustic</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
              // this.setState({ question1: 10 });
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 2) {
      return (
        console.log(this.state.question2),
          <View>
            <Text>
              Instrumentalness
            </Text>
            <Slider
            // style={styles.slider}
            // value={this.state.question1}
              onValueChange={(question2) => this.setState({ question2 })}
            />
            <Text>1- Not Instrumental                   10- Very Instrumental</Text>
            {/* <Text>
              Value:
              {' '}
              {this.state.question2}
            </Text> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.handleClick();
                this.setState({ question2: 10 });
              }}
            >
              <Text>Next</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button}>
              <Text>Having Fun</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Developing a Habit</Text>
            </TouchableOpacity> */}
          </View>
      );
    } else if (questionNum === 3) {
      return (
        <View>
          <Text>
            Liveness
          </Text>
          <Slider
            // style={styles.slider}
            // value={this.state.question1}
            onValueChange={(question3) => this.setState({ question3 })}
          />
          <Text>1- All Studio                   10- At the Concert</Text>

          <Text>
            Value:
            {' '}
            {this.state.question3}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
              this.setState({ question3: 10 });
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Pop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Rap</Text>
          </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 4) {
      return (
        <View>
          <Text>
            Loudness
          </Text>
          <Slider
            // style={styles.slider}
            // value={this.state.question1}
            onValueChange={(question4) => this.setState({ question4 })}
          />
          <Text>1- quiet                            10-LOUD</Text>
          <Text>
            Value:
            {' '}
            {this.state.question4}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
              this.setState({ question4: 10 });
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Chill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Funky</Text>
          </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 5) {
      return (
        <View>
          <Text>
            Popular music
          </Text>
          <Slider
            // style={styles.slider}
            // value={this.state.question1}
            onValueChange={(question5) => this.setState({ question5 })}
          />
          <Text>1- niche music only                            10-top hits please</Text>
          <Text>
            Value:
            {' '}
            {this.state.question5}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
              this.setState({ question5: 10 });
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Only sometimes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No thanks</Text> */}
          {/* </TouchableOpacity> */}
        </View>
      );
    } else if (questionNum === 6) {
      return (
        <View>
          <Text>
            Positivity
          </Text>
          <Slider
            // style={styles.slider}
            // value={this.state.question1}
            onValueChange={(question6) => this.setState({ question6 })}
          />
          <Text>1- meh                         10- Happy vibes!</Text>

          <Text>
            Value:
            {' '}
            {this.state.question6}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
              this.setState({ question6: 10 });
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <Text>Only sometimes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No thanks</Text> */}
          {/* </TouchableOpacity> */}
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
            placeholder="Genres"
            onChange={this.onInputChangeText}
            value={this.state.question7}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleClick();
              this.setState({ question6: 10 });
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
          {/* Send all the responses!! and redirect to main page */}
        </Text>
      );
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.currentQ);
    console.log(this.renderQuestion());
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
  // slider: {
  //   step:
  // }
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
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, { fetchUser, updateUser })(NewUserFlow);

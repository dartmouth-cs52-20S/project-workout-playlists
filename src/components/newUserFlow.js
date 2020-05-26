import React, { Component } from 'react';
import {
  StyleSheet, View,
  Text, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import { fetchUser } from '../actions/index';

const NUM_QUESTIONS = 7;

class NewUserFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 1,
      question1: 0,
      question2: 5,
      question3: 5,
      question4: 5,
      question5: 5,
      question6: 5,
      question7: 5,
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
            onValueChange={question1 => this.setState({ question1 })}
          />
          <Text>
            Value: {this.state.question1}
          </Text>
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
        console.log(this.state.question1),
          <View>
            <Text>
              Instrumentalness
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.handleClick();
                this.setState({ question2: 1 });
              }}
            >
              <Text>1- only instruments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.handleClick();
                this.setState({ question2: 10 });
              }}
            >
              <Text>10- voices please!</Text>
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
          <TouchableOpacity onPress={() => {
              this.handleClick();
               this.setState({ question3: 1 })
              }} style={styles.button}>
            <Text>1-chillin in the studio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
             this.handleClick(); 
             this.setState({ question3: 10 })
            }} style={styles.button}>
            <Text>10-concert in my head please</Text>
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
          <TouchableOpacity onPress={() =>  {
            this.handleClick(); 
            this.setState({ question4: 1 })
          }} style={styles.button}>
            <Text>1-quiet background music</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              this.handleClick(); 
              this.setState({ question4: 10 })
            }} style={styles.button}>
            <Text>10- loud music is power</Text>
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
          <TouchableOpacity onPress={() => {
            this.handleClick(); 
            this.setState({ question5: 1 })
          }} style={styles.button}>
            <Text>1-chart toppers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>  {
            this.handleClick(); 
            this.setState({ question5: 10 })
          }} style={styles.button}>
            <Text>10-new music </Text>
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
          <TouchableOpacity onPress={() => {
            this.handleClick(); 
            this.setState({ question6: 1 })
          }} style={styles.button}>
            <Text>1-meh</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              this.handleClick(); 
              this.setState({ question6: 10 }) 
            }} style={styles.button}>
            <Text>10-upbeat</Text>
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
            Favorite genres while working out?
          </Text>
          <TextInput style={{ height: 25, borderColor: 'gray', borderWidth: 1 }} placeholder="Genres" onChange={this.onInputChangeText} value={this.state.question7} />
          { /*We will add more here*/
          
          /* <TouchableOpacity style={styles.button}>
            <Text>Only sometimes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No thanks</Text> */}
          {/* </TouchableOpacity> */}
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
        <Text><h1>Let's get to know you!</h1></Text><br></br>
        {this.renderQuestion()}
        {/* <TouchableOpacity
          onPress={this.handleClick} // how to make this a different functionality when at the end of questions?
          style={{
            display: 'flex',
            justifyContent: 'center', // this wont center the text?? :(
            backgroundColor: 'orange',
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity> */}
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
    color: 'white',
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

export default connect(mapStateToProps, { fetchUser })(NewUserFlow);

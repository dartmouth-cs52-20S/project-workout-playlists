import React, { Component } from 'react';
import {
  StyleSheet, View,
  //   Button,
  Text, TouchableOpacity,
} from 'react-native';

class NewUserFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQ: 1 };
  }

  componentDidMount() {
    console.log('in newUserFlow');
  }

  handleClick = (event) => {
    if(this.state.currentQ <= 5) {
      const questionNum = {
        currentQ: this.state.currentQ,
      };
      questionNum.currentQ += 1;
      this.setState({ currentQ: questionNum.currentQ });
      console.log(questionNum);
      // this.state.currentQ += 1;
    }
    else {
      this.props.navigation.navigate('Main')
    }
  }

  renderQuestion= () => {
    const questionNum = this.state.currentQ;
    if (questionNum === 1) {
      return (
        <View>
          <Text>
            What do you like to do?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>Walk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Run</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Dance</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 2) {
      return (
        <View>
          <Text>
            Do you have any fitness goals?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>Getting Faster</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Getting In Shape</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Having Fun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Developing a Habit</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 3) {
      return (
        <View>
          <Text>
            What genres do you like listening to when working out?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>Country</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Throwbacks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Pop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Rap</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 4) {
      return (
        <View>
          <Text>
            What&quot;s your workout music mood?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Intense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Chill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Funky</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (questionNum === 5) {
      return (
        <View>
          <Text>
            How do you feel about new music?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text>Hit me with it!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>I like mixing in some new stuff</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Only sometimes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No thanks</Text>
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
        <Text>Let&quot;s Get to Know You!</Text>
        {this.renderQuestion()}
        <TouchableOpacity
          onPress={this.handleClick} // how to make this a different functionality when at the end of questions?
          style={{
            display: 'flex',
            justifyContent: 'center', // this wont center the text?? :(
            backgroundColor: 'orange',
            color: 'white',
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity>
        {/* onclick, update call state incrementer */}
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
  button:
  {
    display: 'flex',
    justifyContent: 'center', // this wont center the text?? :(
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'orange',
  },
});
export default NewUserFlow;


//   const displayedQuestion = (
//   <View style={styles.container}>
//     <Text>
//       Initial Preferences
//     </Text>
//     <button type="button"> Option 1</button>
//     <button type="button"> Option 2</button>
//     <button type="button"> Option 3</button>
//     <button type="button"> Option 4</button>
//     <button type="button">Submit</button>
//     {/* onclick, update call state incrementer */}
//   </View>;
//   );
//   return displayedQuestion;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   image: {
//     width: 400,
//     height: 300,
//   },
// });

import React, { Component } from 'react';
import {
//   StyleSheet, View,
  Text,
} from 'react-native';

class UserFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQ: null };
  }

  componentDidMount() {
    console.log('in newUserFlow');
  }

  changeQuestion = () => {
    this.setState({
      currentQ: 1,
    });
  }

  // add state incrementer after this

  renderQuestion= () => {
    const questionNum = this.state.currentQ;
    if (questionNum === 1) {
      return (
        console.log('in 1'),
          <p>hello</p>
      );
    } else if (questionNum === 2) {
      return ('2');
    } else if (questionNum === 3) {
      return ('3');
    } else {
      return questionNum;
    }
  }

  render() {
    this.changeQuestion();
    if (this.currentQ) {
      return <div>hello</div>;
    }
    console.log(this.state.currentQ);
    console.log(this.renderQuestion());
    return (
      this.renderQuestion(),
        <Text>
          Initial Preferences:
        </Text>
    );
  }
}

export default UserFlow;


//   stateIncrementer() {
//     this.state += 1;
//   }

//   const displayedQuestion = (
//     <View style={styles.container}>
//       <Text>
//         Initial Preferences
//       </Text>
//       <button type="button"> Option 1</button>
//       <button type="button"> Option 2</button>
//       <button type="button"> Option 3</button>
//       <button type="button"> Option 4</button>
//       <button type="button">Submit</button>
//       {/* onclick, update call state incrementer */}
//     </View>
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

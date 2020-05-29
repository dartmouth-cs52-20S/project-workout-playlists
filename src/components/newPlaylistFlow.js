import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput,
  Text, TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioGroup,{Radio} from "react-native-radio-input";



class NewPlaylistFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 1,
      question1: '',
      question2: '',
      question3: '',
      BPM: 0,
      genre: '',
      mood: '',
      energy: 0,
    };
  }

  componentDidMount() {
    console.log('in newPlaylistFlow');
  }

  onInputBPMChange = (event) => {
    this.setState({ BPM: event.target.value });
    //console.log(BPM)
  } 

  onInputGenreChange = (event) => {
    this.setState({ genre: event.target.value });
    //console.log(genre)
  }

  getChecked = (value) => {
    // value = our checked value
    if(this.state.currentQ === 3) {
      this.setState({ mood: value })
      //console.log(mood)
    } else {
      this.setState({energy: value})
      //console.log(energy)
    }
  }


  handleClick = (event) => {
    if (this.state.currentQ <= 6) {
      const questionNum = {
        currentQ: this.state.currentQ,
      };
      questionNum.currentQ += 1;
      this.setState({ currentQ: questionNum.currentQ });
    } else {
        //navigate to the generated playlist instead of main 
      this.state.currentQ = 1;
      this.props.navigation.navigate('Main');
    }
  }
  

  renderQuestion= () => {
    const questionNum = this.state.currentQ;
    if (questionNum === 1) {
      return (
        <View>
          <Text>
            Today I am... 
          </Text>
           <DropDownPicker
            items={[
                {label: 'Running', value: 'Run'},
                {label: 'Walking', value: 'Walk'},
                {label: 'Biking', value: 'Bike Ride'},
                {label: 'Yoga', value: 'Yoga'},
                {label: 'Lifting', value: 'Lift'},
                {label: 'Swimming', value: 'Swim'},
                {label: 'Hiking', value: 'Hike'},
            ]}
            defaultNull
            placeholder="What kind of workout?"
            containerStyle={{height: 40}}
            onChangeItem={item => console.log(item.label, item.value)}
            /* should be passing onChangeItem value to the place we're generating playlist - thinking that the value is a part of the title */
            />
        </View>
      );
    } else if (questionNum === 2) {
      return (
          <View>
            <DropDownPicker
            items={[
                {label: '< 15 minutes', value: 15},
                {label: 'Around 30 minutes', value: 30},
                {label: '45 minutes', value: 45},
                {label: 'An hour', value: 60},
                {label: 'Longer than an hour', value: 120},
            ]}
            defaultNull
            placeholder="For how long?"
            containerStyle={{height: 40}}
            onChangeItem={item => console.log(item.label, item.value)}
            /* should be passing onChangeItem value to the place we're generating playlist - this value will go to length */
            />
          </View>
      );
    } else if (questionNum === 3) {
      return (
        <View>
          <Text>
            What kind of mood are you in? 
          </Text>
            <RadioGroup getChecked={this.getChecked} >
                <Radio label={"Happy"} value={"Happy"} />
                <Radio label={"Sad"} value={"Sad"} />
                <Radio label={"Angry"} value={"Angry"} />
                <Radio label={"Determined"} value={"Determined"} />
                <Radio label={"Chill"} value={"Chill"} />
                <Radio label={"Funky"} value={"Funky"} />
            </RadioGroup>
        </View>
      );
    }
    else if (questionNum === 4) {
      return (
        <View>
          <Text>
            My ideal BPM today is...  
          </Text>
          <TextInput style={styles.input} placeholder="BPM" placeholderTextColor="black" onChange={this.onInputBPMChange} value={this.state.BPM} />
        </View>
      );
    }
    else if (questionNum === 5) {
      return (
        <View>
          <Text>
            I want the most energy...  
          </Text>
          <RadioGroup getChecked={this.getChecked}>
                <Radio label={"At the beginning"} value= {-1} />
                <Radio label={"THE WHOLE TIME"} value={0} />
                <Radio label={"At the end"} value={1} />
            </RadioGroup>
        </View>
      );
    }
    else if (questionNum === 6) {
      return (
        <View>
          <Text>
            Today, I'm feeling like...  
          </Text>
          <TextInput style={styles.input} placeholder="This genre" placeholderTextColor="black" onChange={this.onInputGenreChange} value={this.state.genre} />
        </View>
      );
  }
}

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return (
      <View style={styles.container}>
        {this.renderQuestion()}
        <TouchableOpacity
          onPress={this.handleClick} // how to make this a different functionality when at the end of questions?
          style={{
            display: 'flex',
            alignContent: 'flex-end',
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
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'orange',
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'orange',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});
export default NewPlaylistFlow;

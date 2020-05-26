import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button,
  TouchableOpacity, Picker
} from 'react-native';

class newWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
        type: '',
    };
  }

  onInputChangeType = (event) => {
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text><h2>Start a new workout!</h2></Text><br></br>
            <View>
                <Text>Workout type:</Text>

                <Picker
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.onInputChangeType(itemValue)}
                    >
                    <Picker.Item label="run" value="run" />
                    <Picker.Item label="bike" value="bike" />
                    <Picker.Item label="walk" value="walk" />

                </Picker>
            </View><br></br>
            <View>
                <Text>Workout duration:</Text>

                <Picker
                    selectedValue='30 minutes'
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.onInputChangeType(itemValue)}
                    >
                    <Picker.Item label="30 minutes" value="30" />
                    <Picker.Item label="45 minutes" value="45" />
                    <Picker.Item label="1 hour" value="60" />

                </Picker>
            </View><br></br>
            <Button
            title="Let's go!"
            onPress={() => this.props.navigation.navigate('New Created Playlist')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Picker: {
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

export default newWorkout;

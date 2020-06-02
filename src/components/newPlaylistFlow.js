/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput,
  Text, TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioGroup, { Radio } from 'react-native-radio-input';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { connect } from 'react-redux';

import { fetchUser, createPlaylist } from '../actions/index';

// serachable dropdown from https://www.npmjs.com/package/react-native-searchable-dropdown
const items = [
  {
    id: 'acoustic',
    name: 'Acoustic',
  },
  {
    id: 'afrobeat',
    name: 'Afrobeat',
  },
  {
    id: 'alt-rock',
    name: 'Alt Rock',
  },
  {
    id: 'alternative',
    name: 'Alternative',
  },
  {
    id: 'ambient',
    name: 'Ambient',
  },
  {
    id: 'anime',
    name: 'Anime',
  },
  {
    id: 'black-metal',
    name: 'Black metal',
  },
  {
    id: 'bluegrass',
    name: 'Bluegrass',
  },
  {
    id: 'blues',
    name: 'Blues',
  },
  {
    id: 'bossanova',
    name: 'Bossanova',
  },
  {
    id: 'brazil',
    name: 'Brazil',
  },
  {
    id: 'breakbeat',
    name: 'Breakbeat',
  },
  {
    id: 'british',
    name: 'British',
  },
  {
    id: 'cantopop',
    name: 'Cantopop',
  },
  {
    id: 'chicago-house',
    name: 'Chicago house',
  },
  {
    id: 'children',
    name: 'Children',
  },
  {
    id: 'chill',
    name: 'Chill',
  },
  {
    id: 'classical',
    name: 'Classical',
  },
  {
    id: 'club',
    name: 'Club',
  },
  {
    id: 'comedy',
    name: 'Comedy',
  },
  {
    id: 'country',
    name: 'Country',
  },
  {
    id: 'dance',
    name: 'Dance',
  },
  {
    id: 'dancehall',
    name: 'Dance Hall',
  },
  {
    id: 'death-metal',
    name: 'Death metal',
  },
  {
    id: 'deep house',
    name: 'Deep house',
  },
  {
    id: 'detroit-techno',
    name: 'Detroit techno',
  },
  {
    id: 'disco',
    name: 'Disco',
  },
  {
    id: 'disney',
    name: 'Disney',
  },
  {
    id: 'drum-and-bass',
    name: 'Drum and bass',
  },
  {
    id: 'dub',
    name: 'Dub',
  },
  {
    id: 'dubstep',
    name: 'Dubstep',
  },
  {
    id: 'edm',
    name: 'EDM',
  },
  {
    id: 'electro',
    name: 'Electro',
  },
  {
    id: 'electronic',
    name: 'Electronic',
  },
  {
    id: 'emo',
    name: 'Emo',
  },
  {
    id: 'folk',
    name: 'Folk',
  },
  {
    id: 'forro',
    name: 'Forro',
  },
  {
    id: 'french',
    name: 'French',
  },
  {
    id: 'funk',
    name: 'Funk',
  },
  {
    id: 'garage',
    name: 'Garage',
  },
  {
    id: 'german',
    name: 'German',
  },
  {
    id: 'gospel',
    name: 'Gospel',
  },
  {
    id: 'goth',
    name: 'Goth',
  },
  {
    id: 'grindcore',
    name: 'Grindcore',
  },
  {
    id: 'groove',
    name: 'Groove',
  },
  {
    id: 'grunge',
    name: 'Grunge',
  },
  {
    id: 'guitar',
    name: 'Guitar',
  },
  {
    id: 'happy',
    name: 'Happy',
  },
  {
    id: 'hard-rock',
    name: 'Hard rock',
  },
  {
    id: 'hardcore',
    name: 'Hardcore',
  },
  {
    id: 'hardstyle',
    name: 'Hardstyle',
  },
  {
    id: 'heavy-metal',
    name: 'Heavy metal',
  },
  {
    id: 'hip-hop',
    name: 'Hip hop',
  },
  {
    id: 'holidays',
    name: 'Holidays',
  },
  {
    id: 'honky-tonk',
    name: 'Honky tonk',
  },
  {
    id: 'house',
    name: 'House',
  },
  {
    id: 'idm',
    name: 'IDM',
  },
  {
    id: 'indian',
    name: 'Indian',
  },
  {
    id: 'indie',
    name: 'Indie',
  },
  {
    id: 'indie-pop',
    name: 'Indie pop',
  },
  {
    id: 'industrial',
    name: 'Industrial',
  },
  {
    id: 'iranian',
    name: 'Iranian',
  },
  {
    id: 'j-dance',
    name: 'J-Dance',
  },
  {
    id: 'j-idol',
    name: 'J-idol',
  },
  {
    id: 'j-pop',
    name: 'J-pop',
  },
  {
    id: 'j-rock',
    name: 'J-rock',
  },
  {
    id: 'jazz',
    name: 'Jazz',
  },
  {
    id: 'k-pop',
    name: 'K-pop',
  },
  {
    id: 'kids',
    name: 'Kids',
  },
  {
    id: 'latin',
    name: 'Latin',
  },
  {
    id: 'latino',
    name: 'Latino',
  },
  {
    id: 'malay',
    name: 'Malay',
  },
  {
    id: 'mandopop',
    name: 'Mandopop',
  },
  {
    id: 'metal',
    name: 'Metal',
  },
  {
    id: 'metal-misc',
    name: 'Metal miscellaneous',
  },
  {
    id: 'metalcore',
    name: 'Metalcore',
  },
  {
    id: 'minimal-techno',
    name: 'Minimal techno',
  },
  {
    id: 'movies',
    name: 'Movies',
  },
  {
    id: 'mpb',
    name: 'MPB',
  },
  {
    id: 'new-age',
    name: 'New age',
  },
  {
    id: 'new-release',
    name: 'New release',
  },
  {
    id: 'opera',
    name: 'Opera',
  },
  {
    id: 'pagode',
    name: 'Pagode',
  },
  {
    id: 'party',
    name: 'Party',
  },
  {
    id: 'philippines-opm',
    name: 'Philippines OPM',
  },
  {
    id: 'piano',
    name: 'Piano',
  },
  {
    id: 'pop',
    name: 'Pop',
  },
  {
    id: 'pop-film',
    name: 'Pop Film',
  },
  {
    id: 'pop-dubstep',
    name: 'Pop Dubstep',
  },
  {
    id: 'power-pop',
    name: 'Power pop',
  },
  {
    id: 'progressive-house',
    name: 'Progressive house',
  },
  {
    id: 'psych-rock',
    name: 'Psych rock',
  },
  {
    id: 'punk',
    name: 'Punk',
  },
  {
    id: 'punk-rock',
    name: 'Punk rock',
  },
  {
    id: 'r-n-b',
    name: 'RnB',
  },
  {
    id: 'rainy-day',
    name: 'Rainy day',
  },
  {
    id: 'reggae',
    name: 'Reggae',
  },
  {
    id: 'reggaeton',
    name: 'Reggaeton',
  },
  {
    id: 'road-trip',
    name: 'Road trip',
  },
  {
    id: 'rock',
    name: 'Rock',
  },
  {
    id: 'rock-n-roll',
    name: 'Rock n roll',
  },

  {
    id: 'rockabilly',
    name: 'Rockabilly',
  },

  {
    id: 'romance',
    name: 'Romance',
  },
  {
    id: 'sad',
    name: 'Sad',
  },
  {
    id: 'salsa',
    name: 'Salsa',
  },
  {
    id: 'sambo',
    name: 'Sambo',
  },
  {
    id: 'sertanejo',
    name: 'Sertanejo',
  },
  {
    id: 'show-tunes',
    name: 'Show tunes',
  },
  {
    id: 'singer-songwriter',
    name: 'Singer-songwriter',
  },
  {
    id: 'ska',
    name: 'SKA',
  },
  {
    id: 'sleep',
    name: 'Sleep',
  },
  {
    id: 'songwriter',
    name: 'Songwriter',
  },
  {
    id: 'soul',
    name: 'Soul',
  },
  {
    id: 'soundtracks',
    name: 'Soundtracks',
  },
  {
    id: 'spanish',
    name: 'Spanish',
  },
  {
    id: 'study',
    name: 'Study',
  },
  {
    id: 'summer',
    name: 'Summer',
  },
  {
    id: 'swedish',
    name: 'Swedish',
  },
  {
    id: 'synth-pop',
    name: 'Synth pop',
  },
  {
    id: 'tango',
    name: 'Tango',
  },
  {
    id: 'techno',
    name: 'Techno',
  },
  {
    id: 'trance',
    name: 'Trance',
  },
  {
    id: 'trip-hop',
    name: 'Trip-hop',
  },
  {
    id: 'turkish',
    name: 'Turkish',
  },
  {
    id: 'work-out',
    name: 'Workout',
  },
  {
    id: 'world-music',
    name: 'World music',
  },


];

class NewPlaylistFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 1,
      type: '',
      length: 0,
      mood: '',
      energy: 0,
      BPM: '',
      selectedItems: [],
      selectedItemsString: '',
      done: false,
    };
  }

  componentDidMount = () => {
    this.props.fetchUser(this.props.user.spotifyID);
    console.log('mounted in new playlist flow');
  }

  objArrToString = (arr) => {
    const stringArr = arr.map((genre) => JSON.stringify(genre.name).replace(/[^\w\s!?]/g, '').replace(/\s+/g, '-').toLowerCase());
    const stringified = stringArr.toString();
    this.setState({ selectedItemsString: stringified });
  }


  makePlaylist = () => {
    const playlist = {
      user: this.props.user,
      workoutType: this.state.type,
      averageTempo: parseInt(this.state.BPM, 10),
      energyFlag: this.state.energy,
      // loudnessFlag: this.state.,
      // tempoFlag: ,
      workoutLength: parseInt(this.state.length, 10),
      workoutGenre: this.state.selectedItemsString,
    };
    console.log('playlist in FE: ', playlist);
    this.props.createPlaylist(playlist);
    // .then(this.props.navigation.navigate('Display'));
  }

  onInputBPMChange = (event) => {
    this.setState({ BPM: event.target.value });
  }

  onInputGenreChange = (event) => {
    this.setState({ genre: event.target.value });
  }

  getChecked = (value) => {
    // value = our checked value
    if (this.state.currentQ === 3) {
      this.setState({ mood: value });
      // console.log(mood)
    } else {
      this.setState({ energy: value });
      // console.log(energy)
    }
  }


  handleClick = (event) => {
    if (this.state.currentQ < 6) {
      const questionNum = {
        currentQ: this.state.currentQ,
      };
      questionNum.currentQ += 1;
      this.setState({ currentQ: questionNum.currentQ });
    } else if (this.state.currentQ === 6) {
      this.objArrToString(this.state.selectedItems);
      const questionNum = {
        currentQ: this.state.currentQ,
      };
      questionNum.currentQ += 1;
      this.setState({ currentQ: questionNum.currentQ });
    } else {
      // navigate to the generated playlist instead of main
      this.setState({ done: true });
      this.makePlaylist();
      this.state.currentQ = 0;
    }
  }

  handleClickPlaylist = () => {
    this.props.navigation.navigate('Display');
  }

  // eslint-disable-next-line consistent-return
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
              { label: 'Running', value: 'Run' },
              { label: 'Walking', value: 'Walk' },
              { label: 'Biking', value: 'Bike Ride' },
              { label: 'Yoga', value: 'Yoga' },
              { label: 'Lifting', value: 'Lift' },
              { label: 'Swimming', value: 'Swim' },
              { label: 'Hiking', value: 'Hike' },
            ]}
            defaultNull
            placeholder="What kind of workout?"
            containerStyle={{ height: 40 }}
            value={this.state.type}
            onChangeItem={(item) => this.setState({ type: item.value })}
          />
        </View>
      );
    } else if (questionNum === 2) {
      return (
        <View>
          <Text>
            Planned Workout Duration:
          </Text>
          <TextInput style={styles.input} placeholder="Minutes" placeholderTextColor="white" onChangeText={(text) => this.setState({ length: text })} value={this.state.length} />
          {/* <DropDownPicker
            items={[
              { label: '< 15 minutes', value: 15 },
              { label: 'Around 30 minutes', value: 30 },
              { label: '45 minutes', value: 45 },
              { label: 'An hour', value: 60 },
              { label: 'Longer than an hour', value: 120 },
            ]}
            defaultNull
            placeholder="For how long?"
            containerStyle={{ height: 40 }}
            onChangeItem={(item) => this.setState({ question2: item.value })}
          /> */}
        </View>
      );
    } else if (questionNum === 3) {
      return (
        <View>
          <Text>
            What kind of mood are you in?
          </Text>
          <RadioGroup getChecked={this.getChecked}>
            <Radio label="Happy" value="Happy" />
            <Radio label="Sad" value="Sad" />
            <Radio label="Angry" value="Angry" />
            <Radio label="Determined" value="Determined" />
            <Radio label="Chill" value="Chill" />
            <Radio label="Funky" value="Funky" />
          </RadioGroup>
        </View>
      );
    } else if (questionNum === 4) {
      return (
        <View>
          <Text>
            My ideal BPM today is...
          </Text>
          <TextInput style={styles.input} placeholder="BPM" placeholderTextColor="black" onChangeText={(text) => this.setState({ BPM: text })} value={this.state.BPM} />
        </View>
      );
    } else if (questionNum === 5) {
      return (
        <View>
          <Text>
            I want the most energy...
          </Text>
          <RadioGroup getChecked={this.getChecked}>
            <Radio label="At the beginning" value={-1} />
            <Radio label="THE WHOLE TIME" value={0} />
            <Radio label="At the end" value={1} />
          </RadioGroup>
        </View>
      );
    } else if (questionNum === 6) {
      return (
        <View>
          <Text>
            Today, Im feeling like... (pick up to 5)
          </Text>
          <SearchableDropdown
            multi
            selectedItems={this.state.selectedItems}
            onItemSelect={(item) => {
              const its = this.state.selectedItems;
              its.push(item);
              this.setState({ selectedItems: its });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const its = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: its });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            chip
            resetValue={false}
            textInputProps={
              {
                placeholder: 'Search for a genre',
                underlineColor: 'transparent',
                style: {
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                },
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          />
        </View>
      );
    }
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.done) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.handleClickPlaylist}
            style={styles.button}
          >
            <Text>Really create playlist!</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          {this.renderQuestion()}
          <TouchableOpacity
            onPress={this.handleClick}
            style={styles.button}
          >
            <Text>Next!</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 5,
    margin: 5,
    borderRadius: 14,
    width: 320,
    height: 32,
    // borderWidth: 2,
    // borderColor: 'orange',
    zIndex: -1,
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


function mapStateToProps(reduxState) {
  return {
    user: reduxState.user.user,
    playlist: reduxState.playlist,
  };
}

export default connect(mapStateToProps, { fetchUser, createPlaylist })(NewPlaylistFlow);

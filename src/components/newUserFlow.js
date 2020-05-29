/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View,
  Text, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { connect } from 'react-redux';
import Slider from 'react-native-slider';
import { updateUser } from '../actions/index';

const NUM_QUESTIONS = 7;

var items = [
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
      selectedItems: [],
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
          <SearchableDropdown
            multi={true}
            selectedItems={this.state.selectedItems}
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
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
            chip={true}
            resetValue={false}
            textInputProps={
              {
                placeholder: "Search for a genre",
                underlineColor: "transparent",
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

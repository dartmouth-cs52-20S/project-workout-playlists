/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';
import Slider from 'react-native-slider';
import { FontAwesome5 } from 'react-native-vector-icons';
import * as moment from 'moment';

class NewCreatedPlaylist extends Component {
  /* Adapted from Music Player Screen UI React Native https://www.youtube.com/watch?v=HXX4ZHKLmtc */
  constructor(props) {
    super(props);

    this.state = {
      trackLength: 300,
      timeElapsed: '0:00', /* Initial Values */
      timeRemaining: '5:00', /* Initial Values */
    };
  }

  changeTime = (seconds) => {
    this.setState({ timeElapsed: moment.utc(seconds * 1000).format('m:ss') });
    const { trackLength } = this.state;
    this.setState({ timeRemaining: moment.utc((trackLength - seconds) * 1000).format('m:ss') });
    const { timeRemaining } = this.state;
    console.log(timeRemaining);
  }

  render() {
    return (
      <View style={styles.container}>{this.props.playlist.songs.map((song) => //for each song
        {return this.state.timeRemaining != 0 ? //while song is not over, let state stay at current song in playlist
        <View style={{ alignItems: 'center' }}>
          <View style={{ alignItems: 'center', marginTop: 24 }}>
            <Text>
              Your Custom Playlist
            </Text>
          </View>

        {/* Handling of Playlist items */}
        
        

          <View style={styles.coverContainer}>
            <Image
              style={styles.cover}
            /* URI Attribute of Song Object -- this will have to change, because...we need an actual image. I didn't see one for track object*/
              source={{ uri: (song.uri) }}
            />
          </View>

          <View style={{ alignItems: 'center', marginTop: 32 }}>
            {/* Name attribute of song object */}
            <Text style={[styles.textDark, { fontSize: 20, fontWeight: '500' }]}>{song.name}</Text>
            {/* Artists artibute of song object */}
            <Text style={[styles.Text, { fontSize: 16, marginTop: 8 }]}>{song.artists}</Text>
        </View>
         <View style={{display: 'hidden'}}>{ this.setState({timeRemaining: (song.duration_ms) }) }</View> 
         {/*hidden view to set state of timeRemaining to duration of current song  */}

        <View style={{ margin: 32 }}>
          <Slider
            minimumValue={0}
            maximumValue={this.state.trackLength}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor="#93A883"
            onValueChange={(seconds) => this.changeTime(seconds)}
          />
          <View style={{ marginTop: -12, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
            <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16,
        }}
        >
          <TouchableOpacity>
            <FontAwesome5 name="backward" size={32} color="#93A883" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButtonContainer}>
            <FontAwesome5 name="play" size={32} color="#3D425C" style={[styles.playButton, { marginLeft: 8 }]} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="forward" size={32} color="#93A883" />
          </TouchableOpacity>
        </View>
        </View>
         :
        pass; //otherwise continue to next song in playlist
      
      })};
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  textLight: {
    color: '#B6B7BF',
  },
  text: {
    color: '#8E97A6',
  },
  textDark: {
    color: '#3D425C',
  },
  coverContainer: {
    marginTop: 32,
    width: 250,
    height: 250,
    shadowColor: '#5D3F6A',
    shadowOffset: { height: 15 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
  },
  cover: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: '#FFF',
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: '#3D425C',
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: '500',
  },
  playButtonContainer: {
    backgroundColor: '#FFF',
    borderColor: 'rgba(93, 63, 1086, 0.2)',
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    shadowColor: '#5D3F6A',
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },

});

export default NewCreatedPlaylist;

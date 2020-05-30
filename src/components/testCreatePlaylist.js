import React, { Component } from 'react';
import {
  Button, View, StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';


import { fetchUser, createPlaylist } from '../actions/index';


class testCreatePlaylist extends Component {
    componentDidMount = () => {
        this.props.fetchUser(this.props.user.spotifyID);
        console.log('mounted in createPlaylist');
      }

    makePlaylist = () =>{
        const playlist = {
            user: this.props.user,
            workoutType: "run",
            averageTempo: 100,
            workoutGenre: 'rock-n-roll,pop',
            energyFlag: 1,
            loudnessFlag: 1,
            tempoFlag: 1,
          };
          console.log('FE playlist user:', playlist.user)
          this.props.createPlaylist(playlist);
    }
      

    render (){
        return(
            <View style={styles.container}>
                <Button
                title="Create a playlist"
                onPress={() => this.makePlaylist()}
                />
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
      width: 100,
      height: 100,
    },
    button: {
      backgroundColor: 'orange',
      color: 'white',
      padding: 5,
      borderRadius: 5,
    },
  });


function mapStateToProps(reduxState) {
    return {
      user: reduxState.user.user,
      playlist: reduxState.playlist
    };
  }
  
  export default connect(mapStateToProps, { fetchUser, createPlaylist })(testCreatePlaylist);
import React, { Component } from 'react';
import {
  Button, View, StyleSheet, Text
} from 'react-native';

import { connect } from 'react-redux';


import { fetchPlaylist } from '../actions/index';

class testDisplayPlaylist extends Component{
  
    
    componentDidMount = () => {
        // console.log("display mounted with playlist ID: ", this.props.playlist.id);
        // this.props.fetchPlaylist(this.props.playlist.id)
      }


    render (){
        if(typeof this.props.playlist.songs === 'undefined'){
          return(
          <View style={styles.container}><Text>Sorry, playlist hasn't been created</Text></View>
          )
        } else {
        console.log("in here yeah");
        return(
            <View style={styles.container}>
                {this.props.playlist.songs.map((song) => (<Text>{song.name}</Text>))}
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
    //   user: reduxState.user.user,
      playlist: reduxState.playlist.playlist,
    };
  }
  
  export default connect(mapStateToProps, { fetchPlaylist })(testDisplayPlaylist);
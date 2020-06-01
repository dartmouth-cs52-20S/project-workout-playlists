/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../components/Main';
import SignUp from '../components/signUp';
import NewUserFlow from '../components/newUserFlow';
import NewCreatedPlaylist from '../components/newCreatedPlaylist';
import UserProfile from '../components/userProfile';
import NewPlaylistFlow from '../components/newPlaylistFlow';
import testDisplayPlaylist from '../components/testDisplayPlaylist';
import MyPlaylists from '../components/myPlaylists';
import Feedback from '../components/feedback';

const Tab = createBottomTabNavigator();

class MainTabBar extends Component {
  render() {
    if (this.props.auth) {
      if (this.props.newUser) {
        return (
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Main" component={Main} />
              <Tab.Screen name="New User Flow" component={NewUserFlow} />
              <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
              <Tab.Screen name="User Profile" component={UserProfile} />
              <Tab.Screen name="Workout Selector" component={NewPlaylistFlow} />
              <Tab.Screen name="Display" component={testDisplayPlaylist} />
              <Tab.Screen name="My Playlists" component={MyPlaylists} />
              <Tab.Screen name="Feedback Page" component={Feedback} />

            </Tab.Navigator>
          </NavigationContainer>
        );
      } else {
        return (
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Main" component={Main} />
              <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
              <Tab.Screen name="User Profile" component={UserProfile} />
              <Tab.Screen name="Workout Selector" component={NewPlaylistFlow} />
              <Tab.Screen name="Display" component={testDisplayPlaylist} />
              <Tab.Screen name="My Playlists" component={MyPlaylists} />
              <Tab.Screen name="Feedback Page" component={Feedback} />

            </Tab.Navigator>
          </NavigationContainer>
        );
      }
    } else {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Sign up" component={SignUp} />
            <Tab.Screen name="New User Flow" component={NewUserFlow} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
    newUser: state.auth.newUser,
  }
);

export default connect(mapStateToProps, null)(MainTabBar);

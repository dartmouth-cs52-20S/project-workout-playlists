/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../components/Main';
import SignUp from '../components/signUp';
import SignIn from '../components/signIn';
import NewUserFlow from '../components/newUserFlow';
import NewCreatedPlaylist from '../components/newCreatedPlaylist';
import NewWorkout from '../components/newWorkout';
import UserProfile from '../components/userProfile';
import NewPlaylistFlow from '../components/newPlaylistFlow'


const Tab = createBottomTabNavigator();

class MainTabBar extends Component {
  render() {
    if (this.props.auth) {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="New Playlist" component={NewPlaylistFlow} />
            <Tab.Screen name="New User Flow" component={NewUserFlow} />
            <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
            <Tab.Screen name="User Profile" component={UserProfile} />
            <Tab.Screen name="Workout Selector" component={NewPlaylistFlow} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Sign up" component={SignUp} />
            <Tab.Screen name="Sign in" component={SignIn} />
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="New Playlist" component={NewPlaylistFlow} />
            <Tab.Screen name="New User Flow" component={NewUserFlow} />
            <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
            <Tab.Screen name="Workout Selector" component={NewPlaylistFlow} />

            <Tab.Screen name="User Profile" component={UserProfile} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, null)(MainTabBar);

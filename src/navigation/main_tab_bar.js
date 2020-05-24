import React from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../components/Main';
import signUp from '../components/signUp';
import signIn from '../components/signIn';
import NewUserFlow from '../components/newUserFlow';
import NewCreatedPlaylist from '../components/newCreatedPlaylist';
import newWorkout from '../components/newWorkout';
import UserProfile from '../components/userProfile';


const Tab = createBottomTabNavigator();


const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sign up" component={signUp} />
        <Tab.Screen name="Sign in" component={signIn} />
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="New workout" component={newWorkout} />
        <Tab.Screen name="New User Flow" component={NewUserFlow} />
        <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
        <Tab.Screen name="User Profile" component={UserProfile} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default MainTabBar;

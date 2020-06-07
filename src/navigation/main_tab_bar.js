/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
// import StyleSheet from 'react-native';
import Main from '../components/Main';
import SignUp from '../components/signUp';
import NewUserFlow from '../components/newUserFlow';
import NewCreatedPlaylist from '../components/newCreatedPlaylist';
import UserProfile from '../components/userProfile';
import NewPlaylistFlow from '../components/newPlaylistFlow';
import selectedPlaylist from '../components/selectedPlaylist';
import MyPlaylists from '../components/myPlaylists';
import Feedback from '../components/feedback';
import * as RootNavigation from './rootNavigation';
import { navigationRef } from './rootNavigation';


const Tab = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator>
        <Tab.Screen name="Sign up" component={SignUp} />
        <Tab.Screen name="Main"
          component={Main}
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerLeft: null,
            headerRight: () => (
              <Button
                type="clear"
                style={{ backgroundColor: 'white', paddingRight: 10 }}
                icon={(
                  <Icon
                    // style={styles.button}
                    name="user-circle"
                    size={25}
                    color="rgb(255,115,0)"
                  />
              )}
                onPress={() => RootNavigation.navigate('User Profile')}
              />
            ),
          }}
        />
        <Tab.Screen name="New User Flow"
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerLeft: null,
          }}
          component={NewUserFlow}
        />
        <Tab.Screen name="New Created Playlist"
          options={{ headerTintColor: 'rgb(255,115,0)' }}
          component={selectedPlaylist}
        />
        <Tab.Screen name="User Profile"
          component={UserProfile}
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerLeft: () => (<HeaderBackButton tintColor="rgb(255,115,0)" title="Main" backTitleVisible onPress={() => RootNavigation.navigate('Main')} />),
          }}
        />
        <Tab.Screen name="Workout Selector"
          component={NewPlaylistFlow}
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerLeft: () => (<HeaderBackButton tintColor="rgb(255,115,0)" title="Main" backTitleVisible onPress={() => RootNavigation.navigate('Main')} />),
          }}
        />
        <Tab.Screen name="Display New"
          component={NewCreatedPlaylist}
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerLeft: () => (<HeaderBackButton tintColor="rgb(255,115,0)" title="Main" backTitleVisible onPress={() => RootNavigation.navigate('Main')} />),
            headerRight: () => (
              <Button
                type="clear"
                style={{ backgroundColor: 'white', paddingRight: 10 }}
                icon={(
                  <Icon
                    // style={styles.button}
                    name="heart"
                    size={20}
                    color="rgb(255,115,0)"
                  />
              )}
                onPress={() => RootNavigation.navigate('Feedback Page')}
              />
            ),
          }}
        />
        <Tab.Screen name="Display Selected"
          component={selectedPlaylist}
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerLeft: () => (<HeaderBackButton tintColor="rgb(255,115,0)" title="Main" backTitleVisible onPress={() => RootNavigation.navigate('My Playlists')} />),
            headerRight: () => (
              <Button
                type="clear"
                style={{ backgroundColor: 'white', paddingRight: 10 }}
                icon={(
                  <Icon
                    // style={styles.button}
                    name="heart"
                    size={20}
                    color="rgb(255,115,0)"
                  />
              )}
                onPress={() => RootNavigation.navigate('Feedback Page')}
              />
            ),
          }}
        />
        <Tab.Screen name="My Playlists"
          component={MyPlaylists}
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerLeft: () => (<HeaderBackButton tintColor="rgb(255,115,0)" title="Main" backTitleVisible onPress={() => RootNavigation.navigate('Main')} />),
          }}
        />
        <Tab.Screen name="Feedback Page"
          component={Feedback}
          options={{
            headerTintColor: 'rgb(255,115,0)',
            headerRight: () => (
              <Button
                type="clear"
                style={{ backgroundColor: 'white', paddingRight: 10 }}
                transparent="true"
                icon={(
                  <Icon
                    // style={styles.button}
                    name="home"
                    size={25}
                    color="rgb(255,115,0)"
                  />
              )}
                onPress={() => RootNavigation.navigate('Main')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Tab = createBottomTabNavigator();

// class MainTabBar extends Component {
//   render() {
//     if (this.props.auth) {
//       if (this.props.newUser) {
//         return (
//           <NavigationContainer>
//             <Tab.Navigator showLabels>
//               <Tab.Screen name="Main" component={Main} />
//               <Tab.Screen name="New User Flow" component={NewUserFlow} />
//               <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
//               <Tab.Screen name="User Profile" component={UserProfile} />
//               <Tab.Screen name="Workout Selector" component={NewPlaylistFlow} />
//               <Tab.Screen name="Display" component={testDisplayPlaylist} />
//               <Tab.Screen name="My Playlists" component={MyPlaylists} />
//               <Tab.Screen name="Feedback Page" component={Feedback} />
//             </Tab.Navigator>
//           </NavigationContainer>
//         );
//       } else {
//         return (
//           <NavigationContainer>
//             <Tab.Navigator>
//               <Tab.Screen name="Main" component={Main} />
//               <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
//               <Tab.Screen name="User Profile" component={UserProfile} />
//               <Tab.Screen name="Workout Selector" component={NewPlaylistFlow} />
//               <Tab.Screen name="Display" component={testDisplayPlaylist} />
//               <Tab.Screen name="My Playlists" component={MyPlaylists} />
//               <Tab.Screen name="Feedback Page" component={Feedback} />

//             </Tab.Navigator>
//           </NavigationContainer>
//         );
//       }
//     } else {
//       return (
//         <NavigationContainer>
//           <Tab.Navigator>
//             <Tab.Screen name="Sign up" component={SignUp} />
//             <Tab.Screen name="New User Flow" component={NewUserFlow} />
//           </Tab.Navigator>
//         </NavigationContainer>
//       );
//     }
//   }
// }


const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
    newUser: state.auth.newUser,
  }
);

export default connect(mapStateToProps, null)(MyStack);

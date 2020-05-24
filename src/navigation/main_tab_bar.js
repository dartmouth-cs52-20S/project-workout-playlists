import React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../components/Main';
import signUp from '../components/signUp';
import signIn from '../components/signIn';
import NewUserFlow from '../components/newUserFlow';
import NewCreatedPlaylist from '../components/newCreatedPlaylist';


// const AboutTab = (props) => {
//   return (
//     <View style={{
//       display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center',
//     }}
//     >
//       <Text>Hello world</Text>
//     </View>
//   );
// };


const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Sign up" component={signUp} />
        <Tab.Screen name="Sign in" component={signIn} />
        <Tab.Screen name="New User Flow" component={NewUserFlow} />
        <Tab.Screen name="New Created Playlist" component={NewCreatedPlaylist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;

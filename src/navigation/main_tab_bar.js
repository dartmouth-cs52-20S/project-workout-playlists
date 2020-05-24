import React from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../components/Main';
import signUp from '../components/signUp';
import signIn from '../components/signIn';
import NewUserFlow from '../components/newUserFlow';
import testTab from '../components/test';

// const MainStack = createStackNavigator({
//   Main: {
//     screen: Main,
//     navigationOptions: {
//      header: null,
//     }
//   },
//   signUp: {
//     screen: signUp,
//     navigationOptions: {
//      header: null,
//     }
//   }
// });

const Tab = createBottomTabNavigator();

// const Tab = createMaterialBottomTabNavigator(
//   {
//     First: MainStack,
//   }
// );

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Sign up" component={signUp} />
        <Tab.Screen name="Sign in" component={signIn} />
        <Tab.Screen name="New User Flow" component={NewUserFlow} />
        <Tab.Screen name="Test" component={testTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const AppContainer = createAppContainer(Tab);


export default MainTabBar;

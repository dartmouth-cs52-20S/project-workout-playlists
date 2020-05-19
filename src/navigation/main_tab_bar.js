import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AboutTab = (props) => {
  return <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Hello world</Text></View>;
};


const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About" component={AboutTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;
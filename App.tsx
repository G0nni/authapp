import {SafeAreaView, Text, TextInput, Button, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

import WeatherScreen from './src/screens/WeatherScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Login">
            <Tab.Screen name="Weather" component={WeatherScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="SignUp" component={SignUpScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;

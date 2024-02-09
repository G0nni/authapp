import {SafeAreaView, Text, TextInput, Button, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import authent from './src/auth/firebase';

import WeatherScreen from './src/screens/WeatherScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = authent.onAuthStateChanged(user => {
      if (user) {
        setIsConnected(true);
        console.log('Utilisateur connecté');
      } else {
        setIsConnected(false);
        console.log('Aucun utilisateur connecté');
      }
    });

    // Nettoyer l'inscription à onAuthStateChanged lors du démontage du composant
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        {isConnected ? (
          <>
            <Tab.Screen name="Weather" component={WeatherScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <Tab.Screen name="Home" component={HomeStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

export default App;

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './app/screens/auth/Onboarding';
import Intro from './app/screens/auth/Intro';
import Login from './app/screens/auth/Login';
import Register from './app/screens/auth/Register';
import Dashboard from './app/home/Dashboard';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Welcome' component={Onboarding} /> */}
        <Stack.Screen name="dWallet" component={Intro} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: true }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


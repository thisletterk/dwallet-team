import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../screens/auth/Intro';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const RootStack = createStackNavigator();

const RootStackNavigation = ({ navigation }) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='dWallet' component={Intro} />
            <RootStack.Screen name='Login' component={Login} />
            <RootStack.Screen name='Register' component={Register} />
        </RootStack.Navigator>
    )
}
export default RootStackNavigation;


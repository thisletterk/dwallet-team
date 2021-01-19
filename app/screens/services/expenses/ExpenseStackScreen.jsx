import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Expenses from './Expenses';
import BottomNavigation from '../../../routes/BottomNavigation';


const ExpenseStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const ExpenseStackScreen = ({ navigation }) => {
    return (
        <ExpenseStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}

        >
            <ExpenseStack.Screen name='Expenses' component={Expenses} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }}
            />


        </ExpenseStack.Navigator>
    );
}

export default ExpenseStackScreen;



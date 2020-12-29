import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackRouter } from 'react-navigation';


const DashboardStack = createStackNavigator();
const Stack = createStackNavigator();

const DashbordStackScreen = ({ navigation }) => {
    return (
        <DashboardStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DashboardStack.Screen name='Dashboard' component={Dashboard} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }} />
        </DashboardStack.Navigator>
    );
}


const Dashboard = ({ navigation }) => {

    return (
        <View style={{ justifyContent: 'center', flex: 2, alignItems: 'center' }} options={{
            headerLeft: () => (
                <MaterialCommunityIcons.Button
                    name='menu' size={25}
                    backgroundColor='#009387'
                    onPress={() => navigation.openDrawer()}
                />
            )
        }}>
            <Text>DASBOARD IS HEREE</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />

        </View>


    );

}

export default Dashboard;


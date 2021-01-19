import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './Dashboard';
import { useTheme } from '@react-navigation/native';

const DashboardStack = createStackNavigator();


const DashboardStackScreen = ({ navigation }) => {
    return (

        <DashboardStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}

        >
            <DashboardStack.Screen name='Dashboard' component={Dashboard} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }}

            />
        </DashboardStack.Navigator >
    );
}

export default DashboardStackScreen;
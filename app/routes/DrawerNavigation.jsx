import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import React from 'react';
import Expenses from '../screens/services/expenses/Expenses';
import Funds from '../screens/services/funds/Funds';
import Transfer from '../screens/services/transfer/Transfer';
import Receive from '../screens/services/receive/Receive';
import Dashboard from '../screens/home/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,

    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { View } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';
import DrawerContents from './DrawerContents';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ExpenseStack = createStackNavigator();
const FundStack = createStackNavigator();
const TransferStack = createStackNavigator();
const ReceiveStack = createStackNavigator();




//App services STARTS here
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
        }}>
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

const FundStackScreen = ({ navigation }) => {
    return (
        <FundStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <FundStack.Screen name='Fund Wallet' component={Funds} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }} />
        </FundStack.Navigator>
    );
}

const TransferStackScreen = ({ navigation }) => {
    return (
        <TransferStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <TransferStack.Screen name='Send Money' component={Transfer} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }} />
        </TransferStack.Navigator>
    );
}

const ReceiveStackScreen = ({ navigation }) => {
    return (
        <ReceiveStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ReceiveStack.Screen name='Receive Payment' component={Receive} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }} />
        </ReceiveStack.Navigator>
    );
}
//App services ENDS here


export default function DrawerNavigation() {
    return (

        <Drawer.Navigator initialRouteName="Dashboard">
            {/* <Drawer.Screen name="Menu" component={DrawerContents} /> */}
            <Drawer.Screen name="Expenses" component={ExpenseStackScreen} />
            <Drawer.Screen name="Fund Wallet" component={FundStackScreen} />
            <Drawer.Screen name="Send Money" component={TransferStackScreen} />
            <Drawer.Screen name="Receive Payment" component={ReceiveStackScreen} />

        </Drawer.Navigator>

    );
}
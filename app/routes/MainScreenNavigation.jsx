import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Transactions from '../screens/home/Transactions';
import Dashboard from '../screens/home/Dashboard';
import Profile from '../screens/home/Profile';
import Expenses from '../screens/services/expenses/Expenses';

const Tab = createMaterialBottomTabNavigator();


const DashboardStack = createStackNavigator();
const TransactionStack = createStackNavigator();
const ProfileStack = createStackNavigator();



//bottom screen start here

const MainScreenNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            activeColor="#e91e63"
            style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Transactions"
                component={TransactionStackScreen}
                options={{
                    tabBarLabel: 'Transactions',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="wallet" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Dashboard"
                component={DashboardStackScreen}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export default MainScreenNavigation;






//bottom screen ENDS here


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

const TransactionStackScreen = ({ navigation }) => {
    return (
        <TransactionStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <TransactionStack.Screen name='Transactions' component={Transactions} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }} />
        </TransactionStack.Navigator>
    );
}

const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ProfileStack.Screen name='Profile' component={Profile} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }} />
        </ProfileStack.Navigator>
    );
}

// const FundStackScreen = ({ navigation }) => {
//     return (
//         <FundStack.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#009387',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold'
//             }
//         }}>
//             <FundStack.Screen name='Fund Wallet' component={Funds} options={{
//                 headerLeft: () => (
//                     <MaterialCommunityIcons.Button
//                         name='menu' size={25}
//                         backgroundColor='#009387'
//                         onPress={() => navigation.openDrawer()}
//                     />
//                 )
//             }} />
//         </FundStack.Navigator>
//     );
// }

// const TransferStackScreen = ({ navigation }) => {
//     return (
//         <TransferStack.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#009387',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold'
//             }
//         }}>
//             <TransferStack.Screen name='Send Money' component={Transfer} options={{
//                 headerLeft: () => (
//                     <MaterialCommunityIcons.Button
//                         name='menu' size={25}
//                         backgroundColor='#009387'
//                         onPress={() => navigation.openDrawer()}
//                     />
//                 )
//             }} />
//         </TransferStack.Navigator>
//     );
// }

// const ReceiveStackScreen = ({ navigation }) => {
//     return (
//         <ReceiveStack.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: '#009387',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold'
//             }
//         }}>
//             <ReceiveStack.Screen name='Receive Payment' component={Receive} options={{
//                 headerLeft: () => (
//                     <MaterialCommunityIcons.Button
//                         name='menu' size={25}
//                         backgroundColor='#009387'
//                         onPress={() => navigation.openDrawer()}
//                     />
//                 )
//             }} />
//         </ReceiveStack.Navigator>
//     );
// }












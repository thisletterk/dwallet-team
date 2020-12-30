import {

    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import React from 'react';
import Expenses from '../screens/services/expenses/Expenses';
import Funds from '../screens/services/funds/Funds';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../../components/context';



const ExpenseStack = createStackNavigator();




//DRAWER: Avatar, Name, Wallet ID, menu STARTS here

const DrawerContents = (props) => {

    //creating a state to control change in night mode
    const [isNightMode, setIsNightMode] = React.useState(false);
    const { signOut, toggleTheme } = React.useContext(AuthContext);

    const nightMode = () => {
        setIsNightMode(!isNightMode);
    }
    //state for night mode ENDS here
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row-reverse', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHcewYgiVe7QA/profile-displayphoto-shrink_400_400/0/1516561968869?e=1614211200&v=beta&t=2MZg1_Ok_oH2xH25Nj5wtc8l64x5kMW6oRkLjKbV1RI'
                                }}
                                size={60}
                                marginRight={20}

                            />
                        </View>
                        <View style={{ marginLeft: 10, flexDirection: 'column', marginTop: -20 }}>
                            <Title style={styles.title}>Kingsley Omokwe</Title>
                            <Caption style={styles.caption}>Wallet I.D. 0001</Caption>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='home'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Home'
                            onPress={() => { props.navigation.navigate('Dashboard') }}

                        />

                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='chart-bar'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Expenses'
                            onPress={() => { props.navigation.navigate('Expenses') }}

                        />

                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='wallet-plus'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Fund Wallet'
                            onPress={() => { props.navigation.navigate('Fund Wallet') }}
                        />
                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='subdirectory-arrow-right'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Send Money'
                            onPress={() => { props.navigation.navigate('Send Money') }}
                        />
                    </Drawer.Section>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name='subdirectory-arrow-left'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Receive Payment'
                            onPress={() => { props.navigation.navigate('Receive Payment') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title='Preference'>
                        <TouchableRipple onPress={() => nightMode()}>
                            <View style={styles.nightMode}>
                                <Text>Night Mode</Text>
                                <View pointerEvents='none'>
                                    <Switch value={isNightMode} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name='logout'
                            color={color}
                            size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>
    )
}


export default DrawerContents;


//DRAWER: Avatar, Name, Wallet ID, menu ENDS here
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

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        marginTop: 30,
        marginBottom: 40,
    },
    title: {
        fontSize: 16,
        marginTop: -30,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    nightMode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})
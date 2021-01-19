import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Funds from './Funds';
import FundWithCard from './FundWithCard';
import FundWithBank from './FundWithBank';


const FundStack = createStackNavigator();

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
        }}

        >
            <FundStack.Screen name='Fund Wallet' component={Funds} options={{
                headerLeft: () => (
                    <MaterialCommunityIcons.Button
                        name='menu' size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            }}
            />
            <FundStack.Screen name='Fund With Card' component={FundWithCard} />
            <FundStack.Screen name='Transfer To Bank' component={FundWithBank} />

        </FundStack.Navigator>
    );
}

export default FundStackScreen;




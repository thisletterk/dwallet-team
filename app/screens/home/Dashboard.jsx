import React from 'react';
import { View, Text, StyleSheet, Button, StatusBar, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';




const Dashboard = ({ navigation }) => {

    const { colors } = useTheme();
    const theme = useTheme();


    return (
        <View style={styles.container} >
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

            <View style={{ flex: 2, backgroundColor: '#fff', }}>
                <View style={{ paddingTop: 80, paddingLeft: 20 }}>
                    <Text>Available balance</Text>
                    <Text style={{ fontSize: 40, margin: 10 }}>{'\u20A6'}0</Text>
                    <Text>FUND WALLET</Text>
                </View>
            </View>


            <View style={{ flex: 3, backgroundColor: '#fff', padding: 20 }}>
                <Text>TRANSACTION HISTORY</Text>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center', padding: 110 }}
                ><Text>No transactions here</Text>
                    <Text>send money?</Text></View>
            </View>


            <View style={{ flex: 1, }}>
                <View style={{ paddingLeft: 20 }}>
                    <Text>Expense Control</Text>
                    <View style={{ backgroundColor: '#fff', height: 80, borderRadius: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
                            <Text>Set up your expense control</Text>
                            <Image source={require('../../../assets/wallet.png')}
                                style={styles.wallet} />
                        </View>
                    </View>

                </View>
            </View>


        </View >


    );

}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F9FCFF',
    },
    wallet: {
        width: 60,
        height: 50,
        marginTop: -18,
    }
})


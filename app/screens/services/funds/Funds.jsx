import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
    Title,
    Caption,
    Text,

} from 'react-native-paper';


const Funds = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 18 }}>Choose Your preferred option</Text>

        <TouchableOpacity
            onPress={() => navigation.navigate('Fund With Card')}
        >
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: '#fff', justifyContent: 'center', marginRight: 10 }}>
                    <MaterialCommunityIcons
                        name='credit-card-outline'
                        size={35}
                        color='grey'
                    />
                </View>
                <View style={styles.info}>
                    <Title style={styles.title}>Debit card top up</Title>
                    <Caption style={styles.caption}>Top up your wallet using debit card</Caption>
                    <Feather name="arrow-right"
                        size={24}
                        style={styles.icon}
                    />
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('Transfer To Bank')}
        >
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ backgroundColor: '#fff', justifyContent: 'center', marginRight: 10 }}>
                    <MaterialCommunityIcons
                        name='bank'
                        size={35}
                        color='grey'
                    />
                </View>
                <View style={styles.info}>
                    <Title style={styles.title}>Transfer from bank</Title>
                    <Caption style={styles.caption}>Top up your wallet via bank app</Caption>
                    <Feather name="arrow-right"
                        size={24}
                        style={styles.icon}
                    />
                </View>
            </View>
        </TouchableOpacity>





    </View>);
}

export default Funds;

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FCFF',
        // paddingRight: 20,
        // paddingLeft: 20,
        padding: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    caption: {
        fontSize: 12,
        lineHeight: 14,
        marginLeft: 10
    },
    title: {
        fontSize: 16,
        // marginTop: 24,
        fontWeight: 'normal',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    info: {
        backgroundColor: '#fff',
        width: ScreenWidth - 80,
        height: 60,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    icon: {
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: 20,
        paddingRight: 10
    }
});



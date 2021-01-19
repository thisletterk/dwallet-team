import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Unorderedlist from 'react-native-unordered-list';

const FundWithBank = ({ navigation }) => {
    return (

        <View style={{ backgroundColor: '#F9FCFF', flex: 1, padding: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 20 }}>Fund your wallet from any bank</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', marginBottom: 50 }}>You can fund your wallet directly{'\n'}
            from your bank mobile app
            </Text>
            <View>
                <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 10 }}>Account Number</Text>
                <TextInput
                    placeholder=' 000 111 222 33'
                    editable='false'
                    style={styles.inputAccount}
                />
            </View>
            <View>
                <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 10 }}>Bank Name</Text>
                <TextInput
                    placeholder=' Providus'
                    editable='false'
                    style={styles.inputBank}
                />
            </View>
            <View>
                <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 20 }}>Instructions</Text>
                <Unorderedlist><Text style={styles.listUnordered}>Login to your Mobile App</Text></Unorderedlist>
                <Unorderedlist><Text style={styles.listUnordered}>Navigate to the 'Transfer' option</Text></Unorderedlist>
                <Unorderedlist><Text style={styles.listUnordered}>Select 'Providus Bank' </Text></Unorderedlist>
                <Unorderedlist><Text style={styles.listUnordered}>Insert 'Wallet ID' as reference</Text></Unorderedlist>
                <Unorderedlist><Text style={styles.listUnordered}>Enter amount for transfer</Text></Unorderedlist>
                <Unorderedlist><Text style={styles.listUnordered}>Get funded instantly</Text></Unorderedlist>
            </View>
        </View>

    )
}

export default FundWithBank;

let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputAccount: {
        backgroundColor: '#fff',
        width: ScreenWidth - 40,
        height: 60,
        marginBottom: 20,
        borderRadius: 5,
        borderColor: '#ccc',
        padding: 20
    },
    inputBank: {
        backgroundColor: '#fff',
        width: ScreenWidth - 40,
        height: 60,
        marginBottom: 20,
        borderRadius: 5,
        borderColor: '#ccc',
        padding: 20
    },
    listUnordered: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 20,
    }

})
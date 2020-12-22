import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';



class Register extends Component {
    state = {}
    render() {
        return (<View style={styles.view}>
            <View style={styles.loginCon}>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Login')
                    }
                >
                    <Text style={styles.loginHeading}>Log in</Text>

                </TouchableOpacity>
                <Text style={styles.loginHeadingActive}>Register</Text>
            </View>
            <Text>Enter cred</Text>
            <TextInput style={styles.input} placeholder="name" />
            <TextInput style={styles.input} placeholder="email" />
            <TextInput style={styles.input} placeholder="phone" />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="pass" />
            <TouchableOpacity style={styles.priBtn} onPress={this.submit}>
                <Text style={styles.priBtnText}>Log in</Text>
            </TouchableOpacity>

        </View>);
    }
}

export default Register;

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    loginCon: {
        flexDirection: 'row'
    },
    registerHeading: {
        fontSize: 16,
        fontWeight: 'normal',
        textTransform: 'capitalize',
        marginBottom: 50,
        color: '#00D731',
        marginLeft: 100
    },
    loginHeadingActive: {
        fontSize: 16,
        fontWeight: 'normal',
        textTransform: 'capitalize',
        marginBottom: 50,
        color: '#d23432',
        marginLeft: 50
    },
    input: {
        width: ScreenWidth - 65,
        height: 45,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20
    },
    priBtn: {
        backgroundColor: '#00D731',
        width: 300,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        alignSelf: 'center'
    },
    priBtnText: {
        color: '#fff',
        textAlign: 'center'
    },
    fp: {
        textAlign: 'right',
        color: '#d23432',
        marginBottom: 50
    },

})
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';



const Register = ({ navigation }) => {

    //Authenticate REGISTER USERS STARTS here
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    //Authenticate REGISTER USERS ENDS here
    return (<View style={styles.view}>
        <View style={styles.loginCon}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Login')
                }
            >
                <Text style={styles.loginHeadingActive}>Log in</Text>

            </TouchableOpacity>
            <Text style={styles.registerHeading}>Register</Text>
        </View>

        <TextInput style={styles.input}
            placeholder="Full name"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
        />
        <TextInput style={styles.input}
            placeholder="Email address"
            autoCapitalize="none"
        />
        <TextInput style={styles.input} placeholder="Phone number"
            autoCapitalize='none'
        />
        <TextInput secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.input}
            placeholder="create password"
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
        />
        <TextInput secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.input}
            placeholder="confirm password"
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
        />
        <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
                By signing up you agree to our
                </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
            <Text style={styles.color_textPrivate}>{" "}and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
        </View>
        <TouchableOpacity style={styles.priBtn} onPress={() => { }}>
            <Text style={styles.priBtnText}>Register</Text>
        </TouchableOpacity>

    </View>);

}

export default Register;

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    loginCon: {
        flexDirection: 'row',
        marginTop: 70,
        marginLeft: 50,
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
        marginBottom: 20,
        marginLeft: 30
    },
    priBtn: {
        backgroundColor: '#00D731',
        width: 300,
        paddingTop: 15,
        marginTop: 30,
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
        marginRight: 37,
        marginBottom: 50
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        marginLeft: 30
    },
    color_textPrivate: {
        color: 'grey'
    }

})
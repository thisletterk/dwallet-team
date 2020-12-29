import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


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
        <TextInput style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
        />
        <TextInput style={styles.input} placeholder="Phone number"
            autoCapitalize='none'
        />
        <View>
            <TextInput secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
            /><TouchableOpacity
                onPress={updateSecureTextEntry}
            >
                {data.secureTextEntry ?
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                        style={styles.feather}
                    />
                    :
                    <Feather
                        name="eye"
                        color="grey"
                        size={20}
                        style={styles.feather}
                    />
                }
            </TouchableOpacity>
        </View>
        <View>
            <TextInput secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={styles.input}
                placeholder="Confirm password"
                autoCapitalize="none"
                onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
                onPress={updateConfirmSecureTextEntry}
            >
                {data.secureTextEntry ?
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                        style={styles.feather}
                    />
                    :
                    <Feather
                        name="eye"
                        color="grey"
                        size={20}
                        style={styles.feather}
                    />
                }
            </TouchableOpacity>
        </View>
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
        color: '#009387',
        marginLeft: 100
    },
    loginHeadingActive: {
        fontSize: 16,
        fontWeight: 'normal',
        textTransform: 'capitalize',
        marginBottom: 50,
        color: '#00D7',
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
        backgroundColor: '#009387',
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
    },
    feather: {
        marginLeft: '83%',
        marginTop: -52,
    }

})
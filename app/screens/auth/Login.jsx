import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, StatusBar, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../../components/context';
import Users from '../../../model/users';
import Dashboard from '../home/Dashboard';
import Register from './Register';



const Login = ({ navigation }) => {

    //user validation STARTS here
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });



    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(foundUser);
    }
    //user validation ENDS here



    return (

        <View style={styles.view}>
            <View style={styles.loginCon}>
                <Text style={styles.loginHeadingActive}>Login</Text>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Register')
                }>
                    <Text style={styles.registerHeading}>Register</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.action}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize='none'
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ?
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                            style={styles.feather}
                        />
                    </Animatable.View>
                    : null}
            </View>
            { data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                </Animatable.View>
            }
            <View style={styles.action}>

                <TextInput
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.input}
                    onChangeText={(val) => handlePasswordChange(val)}
                    placeholder="password"
                    autoCapitalize='none'
                />
                <TouchableOpacity
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
            { data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
            }

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ForgotPassword', { id: 1 });
                }}
            >
                <Text style={styles.fp}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.priBtn} onPress={() => { loginHandle(data.username, data.password) }}>
                <Text style={styles.priBtnText}>Login</Text>
            </TouchableOpacity>
        </View>

    );

}


export default Login;

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
        marginBottom: 30,
        marginLeft: 30,




    },
    priBtn: {
        backgroundColor: '#009387',
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
        marginRight: 37,
        marginBottom: 50
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 30,
        marginTop: -15,
        marginBottom: 20,
    },

    action: {
        flexDirection: 'row',
        marginTop: -10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    feather: {
        marginLeft: -30,
        marginTop: 10,
    }

})
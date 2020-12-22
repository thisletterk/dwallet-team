import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native';
import Dashboard from '../../home/Dashboard';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ep: '',
            pwd: '',
            loggedIn: false
        };
    }

    submit = () => {
        const { ep, pwd } = this.state;
        const apiEp = 'Kiss';
        const apiPwd = '12345';

        //authenticate
        if (ep != apiEp && pwd != apiPwd) {
            alert('Your login is invalid');
        } else {
            //store user deatils using asyn storage
            AsyncStorage.setItem('user', 'Kiss');
            //redirect
            this.setState({ loggedIn: true })
            //this.props.navigation.navigate('Dashboard');
        }
    };

    render() {
        if (this.state.loggedIn) {
            return <Dashboard />
        } else {
            return (

                <View style={styles.view}>
                    <View style={styles.loginCon}>
                        <Text style={styles.loginHeadingActive}>Login</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.registerHeading}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Email or Username"
                        value={this.state.ep}
                        onChangeText={(ep) => this.setState({ ep })}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        value={this.state.pwd}
                        onChangeText={(pwd) => this.setState({ pwd })}
                        placeholder="password"
                    />

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('ForgotPassword', { id: 1 });
                        }}
                    >
                        <Text style={styles.fp}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.priBtn} onPress={this.submit}>
                        <Text style={styles.priBtnText}>Login</Text>
                    </TouchableOpacity>
                </View>

            );
        }
    }
}

export default Login;

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
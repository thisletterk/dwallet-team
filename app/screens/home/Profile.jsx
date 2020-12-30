import React from 'react'
import { View, StyleSheet, ScrollView, TextInput, Dimensions } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {

    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';



const Profile = () => {
    return (<View style={styles.profileContent}>
        <ScrollView>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'column', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHcewYgiVe7QA/profile-displayphoto-shrink_400_400/0/1516561968869?e=1614211200&v=beta&t=2MZg1_Ok_oH2xH25Nj5wtc8l64x5kMW6oRkLjKbV1RI'
                        }}
                        size={60}


                    />
                </View>
                <View style={{ flexDirection: 'column', marginTop: -20 }}>
                    <Title style={styles.title}>Kingsley Omokwe</Title>
                    <Caption style={styles.caption}>@Kiss</Caption>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text>Wallet I.D</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=" 001 002 003 004"
                        autoCapitalize='none'
                        editable={false}
                    />
                </View>



                <View style={{ marginEnd: '60%', marginTop: 15, marginTop: 20 }}>
                    <Text>Contact Details</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather
                            name='user'
                            color='grey'
                            size={25}
                            style={{ alignSelf: 'center', margin: 15, marginTop: 20 }}
                        />
                        <TextInput
                            style={styles.input2}
                            placeholder=" Name"
                            autoCapitalize='words'
                        />

                    </View>

                </View>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather
                            name='mail'
                            color='grey'
                            size={25}
                            style={{ alignSelf: 'center', margin: 15, marginTop: 20 }}
                        />
                        <TextInput
                            style={styles.input2}
                            placeholder=" Email"
                            autoCapitalize='words'
                        />

                    </View>

                </View>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather
                            name='smartphone'
                            color='grey'
                            size={25}
                            style={{ alignSelf: 'center', margin: 15, marginTop: 20 }}
                        />
                        <TextInput
                            style={styles.input2}
                            placeholder=" Phone number"
                            autoCapitalize='words'
                        />

                    </View>

                </View>

                <View style={{ marginEnd: '60%', marginTop: 25 }}>
                    <Text>Transaction details</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons
                            name='arrow-collapse'
                            color='grey'
                            size={25}
                            style={{ alignSelf: 'center', margin: 15, marginTop: 20 }}
                        />
                        <TextInput
                            style={styles.input2}
                            placeholder=" Search transaction"
                            autoCapitalize='words'
                        />

                    </View>

                </View>

                <View style={{ marginEnd: '60%', marginTop: 25 }}>
                    <Text>Account seurity</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather
                            name='lock'
                            color='grey'
                            size={25}
                            style={{ alignSelf: 'center', margin: 15, marginTop: 20 }}
                        />
                        <TextInput
                            style={styles.input2}
                            placeholder=" Change password"
                            autoCapitalize='words'
                            secureTextEntry={true}
                        />

                    </View>

                </View>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Feather
                            name='lock'
                            color='grey'
                            size={25}
                            style={{ alignSelf: 'center', margin: 15, marginTop: 20 }}
                        />
                        <TextInput
                            style={styles.input2}
                            placeholder=" Change transfer passcode"
                            autoCapitalize='words'
                            secureTextEntry={true}
                        />

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Feather
                                name='lock'
                                color='grey'
                                size={25}
                                style={{ alignSelf: 'center', margin: 15, marginTop: 20 }}
                            />
                            <TextInput
                                style={styles.input2}
                                placeholder=" Manage wallet I.D"
                                autoCapitalize='words'
                            />

                        </View>

                    </View>


                </View>



            </View>

        </ScrollView>
    </View>);
}

export default Profile;

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    profileContent: {
        flex: 1,
    },
    userInfoSection: {
        marginTop: 30,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        marginTop: 24,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caption: {
        fontSize: 12,
        lineHeight: 14,
        alignSelf: 'center',
        marginBottom: 40,
    },
    input: {
        width: ScreenWidth - 65,
        height: 45,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
    },
    input2: {
        width: '80%',
        height: 45,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 10,
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
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { apisAreAvailable } from 'expo';



class Onboarding extends Component {
    render() {
        return (
            <View style={styles.mainView}>

                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/dungada-wallet.png')}
                />

            </View>
        );
    }
}

export default Onboarding;


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // height: ScreenHeight,
    },

    tinyLogo: {
        width: 190,
        height: 80,
    },
});



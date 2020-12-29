import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

const Funds = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text>Funds</Text>
        <Button
            title="Go to Dashboard"
            onPress={() => navigation.openDrawer()}
        />
    </View>);
}

export default Funds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
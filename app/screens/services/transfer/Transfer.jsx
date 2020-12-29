import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

const Transfer = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text>Transfer</Text>
        <Button
            title="Go to Dashboard"
            onPress={() => navigation.openDrawer()}
        />
    </View>);
}

export default Transfer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
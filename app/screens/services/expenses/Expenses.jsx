import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

const Expenses = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text>Expenses</Text>

    </View>);
}

export default Expenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

const Expenses = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text>Expenses</Text>
        <Button
            title="Go to Dashboard"
            onPress={() => navigation.openDrawer()}
        />

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
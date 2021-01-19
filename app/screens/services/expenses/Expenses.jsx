import { useTheme } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

const Expenses = ({ navigation }) => {

    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }} >
            <View >
                <Text style={{ color: colors.text }}>Expenses</Text>
                <Button
                    title="Go to Dashboard"
                    onPress={() => navigation.openDrawer()}
                />



            </View>
        </View>
    );
}

export default Expenses;

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
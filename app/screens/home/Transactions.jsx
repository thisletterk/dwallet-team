import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';

const Transactions = () => {

    const { colors } = useTheme();

    return (<View style={{ justifyContent: 'center', flex: 2, alignItems: 'center' }}>
        <Text style={{ color: colors.text }}>Transcation Screen</Text>
    </View>);
}

export default Transactions;
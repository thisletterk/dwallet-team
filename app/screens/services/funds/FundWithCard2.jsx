import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const FundWithCard2 = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate()}>
            <View>
                <Text>HERE CARD DETAILS ENTER</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FundWithCard2;
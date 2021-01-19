import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Dimensions, Button } from 'react-native'
import {
    Title,

} from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';




const FundWithCard = ({ navigation }) => {
    const [selectedMonth, setSelectedMonth] = useState("01");
    const onSetSelectedMonth = (selectedMonth) => {
        setSelectedMonth(selectedMonth)
    }

    const [selectYear, setSelectYear] = useState('Jan');

    const onSetSelectedYear = (selectYear) => {
        setSelectYear(selectYear)
    }

    return (

        <View style={{ backgroundColor: '#F9FCFF', flex: 1, padding: 20 }}>

            <View>
                <Title style={styles.title}>Enter your Card details</Title>
            </View>
            <View style={styles.inputName}>
                <TextInput
                    placeholder=' Name on card '
                    style={{ padding: 20 }}
                />
            </View>
            <View style={styles.inputCard}>
                <TextInput
                    placeholder=' Enter card number here'
                    style={{ padding: 20 }}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>

                <View style={styles.inputMonth}>
                    <Picker
                        selectedValue={selectedMonth}
                        style={{ width: 40, marginRight: 20 }}
                        onValueChange={onSetSelectedMonth}
                    >
                        <Picker.Item label="01" value="01" />
                        <Picker.Item label="02" value="02" />
                        <Picker.Item label="03" value="03" />
                        <Picker.Item label="04" value="04" />
                        <Picker.Item label="05" value="05" />
                        <Picker.Item label="06" value="06" />
                        <Picker.Item label="07" value="07" />
                        <Picker.Item label="08" value="08" />
                        <Picker.Item label="09" value="09" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="11" value="11" />
                        <Picker.Item label="12" value="12" />
                    </Picker>
                </View>

                <View>
                    <Picker
                        selectedValue={selectYear}
                        style={{ width: 40, fontSize: 10 }}
                        onValueChange={onSetSelectedYear}
                    >
                        <Picker.Item label="21" value="21" />
                        <Picker.Item label="22" value="22" />
                        <Picker.Item label="23" value="23" />
                        <Picker.Item label="24" value="24" />
                        <Picker.Item label="25" value="25" />
                        <Picker.Item label="26" value="26" />
                        <Picker.Item label="27" value="27" />
                        <Picker.Item label="28" value="28" />
                        <Picker.Item label="29" value="29" />
                        <Picker.Item label="30" value="30" />
                    </Picker>
                </View>

                <View style={{ flexDirection: 'row', marginTop: '23%', marginLeft: '10%' }}>
                    <View style={styles.inputCvv}>
                        <TextInput
                            placeholder=' Enter CVV'
                            style={{ alignSelf: 'center', fontSize: 16, marginTop: 15 }}
                        />
                    </View>
                    <View style={styles.inputAmount}>
                        <TextInput
                            placeholder=' Amount'
                            style={{ fontSize: 16, marginTop: 17, marginLeft: 10 }}
                        />
                    </View>
                </View>

            </View>


            <View style={{
                flex: 2, justifyContent: 'flex-end',
                marginBottom: 30
            }}>
                <Button
                    title=' proceed'
                    style={styles.button}

                />
            </View>
        </View>


    )
}

export default FundWithCard;

let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20
    },
    inputName: {
        backgroundColor: '#fff',
        width: ScreenWidth - 40,
        height: 60,
        marginBottom: 20,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    inputCard: {
        backgroundColor: '#fff',
        width: ScreenWidth - 40,
        height: 60,
        marginBottom: -10,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    inputCvv: {
        backgroundColor: '#fff',
        width: 100,
        height: 50,
        marginRight: 20,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    inputMonth: {
        // paddingTop: 40,
    },
    inputAmount: {
        backgroundColor: '#fff',
        width: 115,
        height: 50,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    button: {
        color: "#f6f6f6",
        borderRadius: 5,
        width: ScreenWidth - 80,
        alignSelf: 'center',
    },
}) 
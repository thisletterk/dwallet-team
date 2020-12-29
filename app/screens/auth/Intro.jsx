import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
export const { width, height } = Dimensions.get('window');
const title_height = height * 0.13;
import Login from './Login';



const slides = [
    {
        key: '1',
        text: 'Fund Wallet',
        image: require('../../../assets/fund.png'),
    },
    {
        key: '2',
        text: 'Receive or Send funds',
        image: require('../../../assets/transfer.png'),
    },
    {
        key: '3',
        text: 'Expense Control',
        image: require('../../../assets/wallet.png'),
    }
];


class Intro extends Component {
    state = {
        showRealApp: false
    };
    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    backgroundColor: item.backgroundColor,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    };
    _onSkip = () => {
        // After user skip the intro slides. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    };

    _renderSkipButton = () => {
        return (<View>
            <Text style={styles.buttonColor}>Skip</Text>
        </View>)
    }

    _renderNextButton = () => {
        return (<View>
            <Text style={styles.buttonColor}>Next</Text>
        </View>)
    }

    _renderPrevButton = () => {
        return (<View>
            <Text style={styles.buttonColor}>Back</Text>
        </View>)
    }

    _renderDoneButton = () => {
        return (<View>
            <Text style={styles.buttonColor}>Done</Text>
        </View>)
    }


    render() {
        if (this.state.showRealApp) {
            return (


                <View
                    style={styles.button}>
                    <Button
                        title='Login to Continue'
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </View>

            );
        } else {
            return (
                <AppIntroSlider
                    renderItem={this._renderItem}
                    data={slides}
                    onDone={this._onDone}
                    showSkipButton={true}
                    dotClickEnabled={true}
                    onSkip={this._onSkip}
                    dotStyle={{ backgroundColor: '#00D7' }}
                    activeDotStyle={{ backgroundColor: '#009387' }}
                    renderSkipButton={this._renderSkipButton}
                    renderDoneButton={this._renderDoneButton}
                    renderPrevButton={this._renderPrevButton}
                    renderNextButton={this._renderNextButton}
                />
            );
        }
    }
}

export default Intro;

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
        margin: 40,
        borderRadius: 100
    },
    text: {
        fontSize: 24,
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Arial'
    },
    buttonColor: {
        color: '#000000',
        fontSize: 18,
        margin: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }


});

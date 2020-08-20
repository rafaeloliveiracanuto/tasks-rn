/* eslint-disable */
import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet,
    View, TextInput, TouchableOpacity } from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import Theme from '../Theme'

export default class Auth extends Component {

    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <ImageBackground style={styles.background}
                source={backgroundImage}>
                <Text style={styles.title}>Tasks</Text>
                <View>
                    <TextInput placeholder='E-mail' value={this.state.email}
                        style={styles.input} onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder='Password' value={this.state.password}
                        style={styles.input} onChangeText={password => this.setState({ password })} />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: Theme.fontFamily,
        color: Theme.colors.secondary,
        fontSize: 70,
        marginBottom: 10,
    },
    input: {

    },
})
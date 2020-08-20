/* eslint-disable */
import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet,
    View, TextInput, TouchableOpacity, Platform } from 'react-native'

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
                <View style={styles.formContainer}>
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
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: Platform.OS === 'ios' ? 15 : 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8',
        padding: 20,
        width: '90%',

    },
})
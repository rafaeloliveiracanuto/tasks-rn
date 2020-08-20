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
})
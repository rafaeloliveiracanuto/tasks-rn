/* eslint-disable */
import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet, Alert,
    View, TouchableOpacity } from 'react-native'

import axios from 'axios'
import backgroundImage from '../../assets/imgs/login.jpg'
import Theme from '../Theme'
import AuthInput from '../components/AuthInput'

import {server, showError, showSuccess} from '../common'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false,
    }

    signInOrSignUp = () => {
        if (this.state.stageNew) {
            Alert.alert('Success!', 'Create account')
        } else {
            Alert.alert('Success!', 'Do Login')
        }
    }

    signUp = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })

            showSuccess('User successfully registered!')
            this.setState({ stageNew: false })
        } catch(e) {
            showError(e)
        }
    }

    render() {
        return (
            <View style={styles.screenContainer}>               
                <ImageBackground style={styles.background} imageStyle={{ borderRadius: 45 }}
                    source={backgroundImage}>
                    <Text style={styles.title}>Tasks</Text>
                    <View style={styles.formContainer}>
                        <Text style={styles.subtitle}>
                            {this.state.stageNew ? 'Create an account' : 'Enter your data'}
                        </Text>

                        {this.state.stageNew && 
                            <AuthInput icon='user' placeholder='Name' value={this.state.name}
                                style={styles.input} onChangeText={name => this.setState({ name })} />
                        }

                        <AuthInput icon='at' placeholder='E-mail' value={this.state.email}
                            style={styles.input} onChangeText={email => this.setState({ email })} />

                        <AuthInput icon='lock' placeholder='Password' 
                            secureTextEntry={true} value={this.state.password}
                            style={styles.input} onChangeText={password => this.setState({ password })} />
                        
                        {this.state.stageNew && 
                            <AuthInput icon='asterisk' 
                                placeholder='Confirm password' secureTextEntry={true}
                                value={this.state.confirmPassword} style={styles.input} 
                                onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                        }

                        <TouchableOpacity onPress={this.signInOrSignUp}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    {this.state.stageNew ? 'Sign up' : 'Sign in'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ padding: 10 }} 
                        onPress={ () => this.setState({ stageNew: !this.state.stageNew }) }>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Do you already have an account?'
                                : 'Do not have an account yet?'}
                        </Text>

                    </TouchableOpacity>
                </ImageBackground>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
    },
    title: {
        fontFamily: Theme.fontFamily,
        color: Theme.colors.secondary,
        fontSize: 70,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: Theme.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    formContainer: {
        padding: 20,
        width: '90%',
        borderRadius: 15,
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 15,  
    },
    buttonText: {
        fontFamily: Theme.fontFamily,
        color: '#FFF',
        fontSize: 20,
    },
})
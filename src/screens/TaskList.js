import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import Theme from '../Theme'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/en-gb'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('en-gb').format('ddd, D MMMM')

        return (   
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>Task 01</Text>
                    <Text>Task 02</Text>
                    <Text>Task 03</Text>
                    <Text>Task 04</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: Theme.fontFamily,
        fontSize: 50,
        color: Theme.colors.secondary,
        marginLeft: 20,
    },
    subtitle: {
        fontFamily: Theme.fontFamily,
        color: Theme.colors.secondary,
        fontSize: 14,
        marginLeft: 40,
        marginBottom: 20
    }
})

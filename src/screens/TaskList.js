import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/en-gb'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('en-gb').format('ddd, MMMM D[th]')

        return (

            <View style={styles.container}>
                <ImageBackground style={styles.background} source={todayImage}>
                    <View>
                        <Text>Today</Text>
                        <Text>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Text>TaskList</Text>
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
})

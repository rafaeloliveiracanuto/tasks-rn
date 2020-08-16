/* eslint-disable */
import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'

import Theme from '../Theme'
import todayImage from '../../assets/imgs/today.jpg'

import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/en-gb'

import Task from '../components/Task'

export default class TaskList extends Component {
    
    state = {
        showDoneTasks: true,
        tasks: [{
            id: Math.random(),
            description: 'Buy React Native Book',
            estimateAt: new Date(),
            doneAt: new Date(),
        }, {
            id: Math.random(),
            description: 'Read React Native Book',
            estimateAt: new Date(),
            doneAt: null
        }]
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks })
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks: tasks })
    }
    
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
                    <FlatList data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} /> } />
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

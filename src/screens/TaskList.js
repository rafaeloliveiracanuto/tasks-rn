/* eslint-disable */
import React, { Component } from 'react'
import { View, 
    Text, 
    ImageBackground, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity, 
    Platform, 
    Alert } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import Theme from '../Theme'
import todayImage from '../../assets/imgs/today.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/en-gb'

import Task from '../components/Task'
import AddTask from './AddTask'

const initialState = { 
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}

export default class TaskList extends Component {
    
    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state, this.filterTasks)
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const isPending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(isPending)
        }

        this.setState({ visibleTasks: visibleTasks })
        AsyncStorage.setItem('tasksState', JSON.stringify(this.state))
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks: tasks }, this.filterTasks)
    }

    addTask = newTask => {
        if (!newTask.description || !newTask.description.trim()) {
            Alert.alert('Invalid data', 'Description not informed!')
            return 
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            description: newTask.description,
            estimateAt: newTask.date,
            doneAt: null
        })

        this.setState({ tasks: tasks, showAddTask: false }, this.filterTasks)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks: tasks}, this.filterTasks)
    }
    
    render() {
        const today = moment().locale('en-gb').format('ddd, D MMMM')

        return (   
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask} 
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask} />
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} color={Theme.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask} /> } />
                </View>
                <TouchableOpacity style={styles.addButton}
                    activeOpacity={0.7}
                    onPress={() => this.setState({ showAddTask: true }) }>
                    <Icon name='plus' size={20}
                        color={Theme.colors.secondary} />
                </TouchableOpacity>
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
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 10,
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Theme.colors.today,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

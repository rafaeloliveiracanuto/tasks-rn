/* eslint-disable */
import React, { Component } from 'react'
import { Modal,
    Platform, 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback 
} from 'react-native'

import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker' 

import Theme from '../Theme'

const initialState = { description: '', date: new Date(), showDatePicker: false }

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            description: this.state.description,
            date: this.state.date
        }

        this.props.onSave && this.props.onSave(newTask)
        this.setState({ ...initialState })
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker value={this.state.date}
            onChange={(_, date) => this.setState({ date: date, showDatePicker: false })}
            mode='date' />

        const dateString = moment(this.state.date).format('ddd, D MMMM [of] YYYY')

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }

        return datePicker
    }

    render () {
        return (
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
                
                <View style={styles.container}>
                    <Text style={styles.header}>New Task</Text>

                    <TextInput style={styles.input} 
                        placeholder='Write a description...'
                        onChangeText={description => this.setState({ description })}
                        value={this.state.description}>
                    </TextInput>

                    {this.getDatePicker()}

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#FFF'
    },
    header: {
        fontFamily: Theme.fontFamily,
        backgroundColor: Theme.colors.today,
        color: Theme.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    input: {
        fontFamily: Theme.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: Theme.colors.today,
    },
    date: {
        fontFamily: Theme.fontFamily,
        fontSize: 20,
        marginLeft: 15,
    },
})


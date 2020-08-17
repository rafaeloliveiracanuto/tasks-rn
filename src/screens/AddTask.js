/* eslint-disable */
import React, { Component } from 'react'
import { Modal, 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback 
} from 'react-native'
import Theme from '../Theme'

const initialState = { description: '' }

export default class AddTask extends Component {

    state = {
        ...initialState
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

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
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
})


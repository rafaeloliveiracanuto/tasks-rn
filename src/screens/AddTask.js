/* eslint-disable */
import React, { Component } from 'react'
import { Modal, 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback 
} from 'react-native'
import Theme from '../Theme'

export default class AddTask extends Component {

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
        flex: 1,
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
})


import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../Theme.js'

export default props => {

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text>{props.description}</Text>
                <Text>{props.estimateAt + ''}</Text> 
            </View>   
        </View>
    )
}

const getCheckView = (doneAt) => {
    if (doneAt != null) {
        return (
            <View><Text>Done</Text></View>
        )
    } else {
        return (
            <View><Text>Pending</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer: {
        width: '20%',
    }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../Theme.js'

export default props => {

    const doneOrNotStyle = props.doneAt && { textDecorationLine: 'line-through' }

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text style={[styles.description, doneOrNotStyle]}>{props.description}</Text>
                <Text>{props.estimateAt + ''}</Text> 
            </View>   
        </View>
    )
}

const getCheckView = (doneAt) => {
    return doneAt ? 
    <View style={styles.done}>
        <Icon name='check' size={20} color='#FFF'></Icon>
    </View> :
        <View style={styles.pending}></View>    
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontFamily: Theme.fontFamily,
        color: Theme.colors.mainText,
        fontSize: 15,
    }
})
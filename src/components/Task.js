/* eslint-disable */ 
import React from 'react'
import { View,
    Text,
    StyleSheet, 
    TouchableWithoutFeedback, 
    TouchableOpacity
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../Theme.js'
import moment from 'moment'
import 'moment/locale/en-gb'

export default props => {
    const doneOrNotStyle = props.doneAt && {textDecorationLine: 'line-through'};

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).locale('en-gb').format('ddd, D MMMM')

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right}>
                <Icon name='trash' size={30} color='#FFF' />
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <Icon name='trash' size={20} color='#FFF' />
                <Text style={styles.deleteText}>Delete</Text>
            </View>
        )
    }

    return (
        <Swipeable renderRightActions={getRightContent} renderLeftActions={getLeftContent}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.description, doneOrNotStyle]}>{props.description}</Text>
                    <Text style={styles.date}>{formattedDate}</Text> 
                </View>   
            </View>
        </Swipeable>
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
    },
    date: {
        fontFamily: Theme.fontFamily,
        color: Theme.colors.subText,
        fontSize: 12,
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    left: {
        backgroundColor:'red',
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteText: {
        fontFamily: Theme.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10
    },
})
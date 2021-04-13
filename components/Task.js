import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor:'#fff',
        padding: 15 , 
        borderRadius:10 , 

        
    },
    itemLeft: {
        flexDirection : 'row' , 
        alignItems:'center' ,
        borderRadius: 10 , 
        alignItems: 'center', 
        justifyContent: 'space-between'
        , marginBottom: 20 
    },
    itemText: {
        maxWidth:'80%' , 

    },
    circular: {
        width: 12 , 
        height: 12 , 
        borderWidth: 2 , 
        borderRadius: 5
    },
    square: {
        width: 14 , 
        height: 24 , 
        backgroundColor: '#55BCF6',
        opacity:0.4, 
        borderRadius: 5 , 
        marginRight: 15 
    }
})
export default Task;
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcBtnBack } from '../../assets'

export default function index({title}) {
    return (
        <View style={styles.link}>
            <TouchableOpacity>
                <IcBtnBack/>
            </TouchableOpacity>
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    link:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:21
    },
    heading:{
        color:"#161822",
        fontSize:20,
        marginLeft:20,
    },
})

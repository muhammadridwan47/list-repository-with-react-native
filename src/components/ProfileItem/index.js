import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProfileItem({label,value}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:"#EEEEEE",
        justifyContent:'center',
        alignItems:"center"

    },
    label:{
        fontSize:14,
        color:"#7D8797",
        marginBottom:6
    },
    value:{
        fontSize:14,
        color:"#112340"
    }
})

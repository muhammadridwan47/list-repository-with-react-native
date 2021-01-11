import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function Loading() {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color="#0BCAD4" />
            <Text style={styles.title}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.3)",
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        marginTop:12,
        color:"#fff",
        fontSize:18
    }
})

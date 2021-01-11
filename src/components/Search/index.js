import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { IcSearch } from '../../assets/Icons'

export default function Search({onPress,onChangeText,value}) {
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input} placeholder="Enter Username" onChangeText={(e) => onChangeText(e)} value={value}/>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <IcSearch/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row'
    },
    input:{
        backgroundColor:'#EDEEF0',
        flex:1,
        marginRight:10,
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:14
    },
    btn:{
        width:45,
        height:45,
        backgroundColor:"#0BCAD4",
        borderRadius:10,
        justifyContent:"center",
        alignItems:'center'
    }
})

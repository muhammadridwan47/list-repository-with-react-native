import React from 'react'
import { Text,TouchableOpacity,StyleSheet} from 'react-native'

export default function Button({name}) {
    return (
        <>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    btn:{
        paddingVertical:10,
        backgroundColor:"#0BCAD4",
        borderRadius:10,
        width:"100%",
    },
    text:{
        textAlign:"center",
        fontSize:18,
        color:"#fff"
    }
});
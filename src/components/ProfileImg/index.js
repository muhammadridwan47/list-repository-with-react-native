import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native'
import { ImProfile } from '../../assets'
import { GAP } from '../../utils'

export default function ProfileImg({name,desc,photo}) {
    return (
        <>
            <View style={styles.container}>
                <GAP height={30}/>
                <View style={styles.borderProfile}>
                    <Image source={photo ? {uri:photo} : ImProfile }  style={styles.avatar}/>
                </View>
                <View>
                    <Text style={styles.name}>{name?name:'Not Found'}</Text>
                    <Text style={styles.profession}>{desc}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    avatar:{
        width:110,
        height:110,
        borderRadius:110 / 2,
    },
    borderProfile:{
        width:130,
        height:130,
        borderRadius:130 / 2,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#E9E9E9'
    },
    name:{
        fontSize:20,
        color:'#112340',
        marginTop:16,
        textAlign:'center'
    },
    profession:{
        fontSize:16,
        color:'#7D8797',
        marginTop:2,
        textAlign:'center'
        
    },
    removePhoto:{
        position:'absolute',
        right:8,
        bottom:8
    }

})

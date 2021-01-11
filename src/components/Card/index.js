import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import { IcFile } from '../../assets'

export default function Card({title,subTitle,onPress}) {
    return (
            <View style={styles.card}>
                <View style={styles.wrapper}>
                    <IcFile />
                    <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.link}>Visit</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    card:{
      backgroundColor:'white',
      paddingLeft:19,
      paddingRight:24,
      paddingVertical:20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderRadius:17,
      marginBottom:15
    },
    wrapper:{
        alignItems:'center',
        flexDirection:'row'
    },
    title:{
      fontSize:18,
      color:'#161822',
      marginBottom:1,
      fontFamily:'Tajawal-Medium'
    },
    subTitle:{
      fontSize:16,
      color:'#737583',
      fontFamily:'Tajawal-Regular'
    },
    content:{
        marginLeft:10
    },
    link:{
        fontSize:18,
        color:"#6379F4"

    }
  });
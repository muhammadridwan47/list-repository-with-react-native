import React from 'react'
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Card, GoBack } from '../../components'
import { GAP } from '../../utils'

export default function Repository({navigation,route}) {
   const {username} = route.params;
   
    return (
        <View style={styles.wrapper}>
            <GAP height={20}/>
            <GoBack title="List Repository" onPress={() => navigation.goBack()}/>
            <GAP height={20}/>
            <Card title={"Gojek"} subTitle={"19-jun-2019"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:2,
        flex:1,
        backgroundColor:"#fff"
    },
  });

import React,{ useEffect,useState } from 'react'
import { View, StyleSheet, Linking,Text } from 'react-native'
import { Card, GoBack } from '../../components'
import { GAP } from '../../utils'
import { useDispatch } from 'react-redux'
import API from '../../service';
import { ScrollView } from 'react-native-gesture-handler'
import moment from 'moment'

export default function Repository({navigation,route}) {
   const {username} = route.params;
   const dispacth = useDispatch();
   const [data,setData] = useState([])

   useEffect(() => {
      dispacth({type:'SET_LOADING',value:true});
      API.ListRepository(username)
      .then(res => {
        setData(res)
        dispacth({type:'SET_LOADING',value:false});
      })
      .catch(err => {
        setData([])

        dispacth({type:'SET_LOADING',value:false});
      })
   },[])
    return (
        <View style={styles.wrapper}>
            <GAP height={20}/>
            <GoBack title="List Repository" onPress={() => navigation.goBack()}/>
            <GAP height={20}/>
            {
                data.length !== 0 ? (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            data.map((result,index) => {
                            return <Card key={index} title={result.name} subTitle={moment(result.created_at).format('dddd, DD MMMM YYYY')} onPress={()=> Linking.openURL(result.html_url)}/>
                            })
                        }
                     </ScrollView>
                ):(
                    <View style={styles.notif}>
                        <Text style={styles.title}>
                            Repository Not Found
                        </Text>
                    </View>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:2,
        flex:1,
        backgroundColor:"#fff"
    },
    notif:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },title:{
        fontSize:16
    }
  });

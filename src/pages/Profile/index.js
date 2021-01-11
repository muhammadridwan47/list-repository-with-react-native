import React,{ useState } from 'react'
import { View,Image,StyleSheet ,ScrollView} from 'react-native';
import { ProfileImg,ProfileItem,Button, Search } from '../../components';
import { GAP } from '../../utils';
import { ImSearching } from '../../assets';
import API from '../../service';
import { useDispatch } from 'react-redux'
import { showMessage } from 'react-native-flash-message';

export default function Profile({navigation}) {
    const [keyword,setKeyword] = useState('')
    const [show,setShow] = useState(false)
    const [data,setData] = useState([])
    const dispacth = useDispatch();

    const searching = () => {
      if (!keyword) {
        showMessage({
          message: "Please Enter Username!",
          type: "danger",
        });
          return false
      }
       dispacth({type:'SET_LOADING',value:true});
        API.Profile(keyword)
        .then(res => {
          setShow(true)
          setData(res)
          dispacth({type:'SET_LOADING',value:false});
          setKeyword('')
        })
        .catch(err => {
          dispacth({type:'SET_LOADING',value:false});
          setKeyword('')
          setData('')
        })
    }

    const notFound = () => {
      showMessage({
        message: "Data Not Found!",
        type: "danger",
      });
    }

    return (
      <>
        <View style={styles.wrapper}>
          <GAP height={30}/>
          <Search onPress={() => searching()} onChangeText={(e) => setKeyword(e) } value={keyword}/>
          {
            show  ? 
            (
              <>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <ProfileImg name={data?.name} desc={data?.location} photo={data?.avatar_url}/>
                    <GAP height={26}/>
                    <ProfileItem label={"Public Repository"} value={data?.public_repos}/>
                    <ProfileItem label={"Followers"} value={data?.followers}/>
                    <ProfileItem label={"Following"} value={data?.following}/>
                    <GAP height={23}/>
                    <Button name={"Show Repository"}  onPress={() => data ? navigation.navigate('Repository',{username:data?.login}) : notFound()}/>
                 </ScrollView> 
              </>
            ):(
              <>
                <View style={styles.search}>
                  <Image source={ImSearching} />
                </View>
              </>
            )
          }
        </View>
      </>
    )
}

const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal:20,
    flex:1,
    backgroundColor:"white"
  },
  search:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

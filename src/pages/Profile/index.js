import React from 'react'
import { View } from 'react-native';
import { Profile,ProfileItem,Button } from '../../components';
import { GAP } from '../../utils';
export default function index() {
    return (
      <>
        <View style={{paddingHorizontal:20,justifyContent:'center',flex:1}}>
          <Profile name={"Muhammad Riduwan"} desc={"Banda Aceh"}/>
          <GAP height={26}/>
          <ProfileItem label={"Public Repository"} value={26}/>
          <ProfileItem label={"Followers"} value={7}/>
          <ProfileItem label={"Following"} value={13}/>
          <GAP height={23}/>
          <Button name={"Show Repository"}/>
        </View>
      </>
    )
}

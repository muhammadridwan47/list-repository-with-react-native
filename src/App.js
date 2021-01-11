import React from 'react';
import { View } from 'react-native';
import { ProfileItem,Profile, Button } from './components';
import {GAP} from './utils';

const App = () => {
  return (
    <>
      <View style={{paddingHorizontal:20,justifyContent:'center',flex:1}}>
        <Profile name={"Muhammad Riduwan"} desc={"Banda Aceh"}/>
        <GAP height={26}/>
        <ProfileItem label={"Public Repository"} value={26}/>
        <ProfileItem label={"Followers"} value={7}/>
        <ProfileItem label={"Following"} value={13}/>
        <Button name={"Start Consultation"}/>
      </View>
    </>
  );
};


export default App;

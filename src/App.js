import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from "./router"
import { Loading } from './components';
import {Provider,useSelector} from 'react-redux';
import store from './redux';

const MainApp = () => {
  const {loading} = useSelector(state => state);
  return (
    <>
        <NavigationContainer>
            <Router/>
        </NavigationContainer>
        {loading && <Loading/>}
    </>
  );
};

export default function App (){
  return (
    <Provider store={store}>
        <MainApp/>
    </Provider>
  )
}


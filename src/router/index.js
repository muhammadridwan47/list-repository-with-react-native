import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Profile,
  Repository
} from '../pages';
const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName={'Repository'}>
        <>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Repository"
            component={Repository}
            options={{headerShown: false}}
          />
        </>
    </Stack.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Profile,
} from '../pages';
const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName={'Profile'}>
        <>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </>
    </Stack.Navigator>
  );
}

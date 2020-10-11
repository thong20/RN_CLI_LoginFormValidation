import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SplashComponent from './SplashComponent'
import SignInComponent from './SignInComponent'
import SignUpComponent from './SignUpComponent'


const Stack = createStackNavigator()
export default function RootStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SplashComponent" component={SplashComponent} />
      <Stack.Screen name="SignInComponent" component={SignInComponent} />
      <Stack.Screen name="SignUpComponent" component={SignUpComponent} />
    </Stack.Navigator>
  )
}
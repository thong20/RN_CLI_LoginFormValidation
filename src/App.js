/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// link: https://youtu.be/vOPf0QL2mWs
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import RootStack from './RootStack'

// 11:35
const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
